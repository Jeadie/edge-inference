use llm;
use std::{convert::Infallible};

/// Embed a string with a given model.
pub fn embed(q: &str, model: Box<dyn llm::Model>) -> Result<Vec<f32>, Box<dyn std::error::Error>> {

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
