use std::{convert::Infallible, path::Path};
use llm;
use llm_base::{self, Vocabulary};

use crate::model;


const DEFAULT_MODEL: &str = "bloom";
const DEFAULT_PATH: &str = "/Users/jeadie/Github/edge/model.bin"; // bloom-560m-q5_1-ggjt.bin";

/// Create a LLM model based on 
pub fn create_model(model: Option<&str>, path: Option<&str>, overrides_json: &str) -> Box<dyn llm::Model> {
    let model_name = match model {
        Some(name) => name,
        None => DEFAULT_MODEL,
    };
    let model_architecture: llm::ModelArchitecture = model_name.parse().unwrap();

    let model_path: &Path = match path {
        Some(path) => Path::new(path),
        None => Path::new(DEFAULT_PATH),
    };
    // let overrides: <llm::models::Bloom as llm::KnownModel>:: = serde_json::from_str(overrides_json).unwrap();
    let empty_progress_callback: Box<dyn FnMut(llm::LoadProgress)> = Box::new(|_: llm::LoadProgress| {});
    
    
    println!("model name: {}", model_name);
    println!("model arch: {}", model_architecture);
    println!("model path: {}", model_path.display());
    
    let model_params = llm_base::ModelParameters {
        prefer_mmap: true,
        context_size: 4096,
        lora_adapters: None
    };

    return Box::new(llm::load::<llm::models::Bloom>(
        model_path,
        llm_base::VocabularySource::Model,
        model_params,
        empty_progress_callback,
    ).unwrap_or_else(|err| {
        panic!("Failed to load {} model from {:?}: {}", model_architecture, model_path, err)
    }));

    // return llm::load_dynamic(
    //     model_architecture,
    //     model_path,
    //     model_params,
    //     overrides,
    //     empty_progress_callback
    // )
    // .unwrap_or_else(|err| {
    //     panic!("Failed to load {} model from {:?}: {}", model_architecture, model_path, err)
    // });
}

/// Embed a string with a given model.
pub fn embed(q: &str, model: Box<dyn llm::Model>) -> Result<Vec<f32>, Box<dyn std::error::Error>> {


    let mut output =  Default::default(); // OutputRequest
    
    let mut feedback_fn: Box<dyn FnMut(llm::InferenceResponse) -> Result<llm::InferenceFeedback, Infallible>> = Box::new(
        |_: llm::InferenceResponse| {
            Ok(llm::InferenceFeedback::Halt)
        }
    );
    let mut session = model.start_session(Default::default());
    let res = session.infer::<Infallible>(
        model.as_ref(), &mut rand::thread_rng(), &llm::InferenceRequest {
        prompt: llm::Prompt::Text(q),
        parameters: &Default::default(),
        play_back_previous_tokens: false,
        maximum_token_count: Some(1),
        },
         &mut output,
         &mut feedback_fn,
    );
    return match res {
        Ok(_) => {
            match output.embeddings {
                Some(embeddings) => Result::Ok(embeddings),
                None => Result::Err(Box::new(llm::InferenceError::ContextFull)),                
            }
        },
        Err(err) => Result::Err(Box::new(err)),
    };
}
