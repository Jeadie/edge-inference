use llm::{self, Model};
use llm_base::{self, VocabularySource};
use std::{convert::Infallible};

pub fn create_model() -> Box<llm::models::Bloom> {
    let bloom = llm::load::<llm::models::Bloom>(
        // path to GGML file
        std::path::Path::new("/Users/jeadie/Github/edge/model.bin"),
        Default::default(),
        Option::None,
        llm::load_progress_callback_stdout
    )
    .unwrap_or_else(|err| panic!("Failed to load model: {}", err));

    return Box::new(bloom);
}

pub fn embed(q: &str, model: Box<llm::models::Bloom>) -> Result<Vec<f32>, Box<dyn std::error::Error>> {

    let mut output =  Default::default(); // OutputRequest
    
    let mut feedback_fn: Box<dyn FnMut(llm::InferenceResponse) -> Result<llm::InferenceFeedback, Infallible>> = Box::new(
        |_: llm::InferenceResponse| {
            Ok(llm::InferenceFeedback::Halt)
        }
    );

    let mut session = model.start_session(Default::default());
    let res = session.infer::<Infallible>(model.as_ref(), &mut rand::thread_rng(), &llm::InferenceRequest {
        prompt: llm::Prompt::Text(q),
        ..Default::default()
        },
         &mut output,
         &mut feedback_fn
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
