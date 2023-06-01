// use std::{path::PathBuf};
// use llm;
// use clap::Parser;
// use core::convert::Infallible;
// use llm_base::{InferenceParameters, InferenceSessionConfig};
// use std::io::Write;

// #[derive(Parser)]
// struct Args {
//     model_architecture: llm::ModelArchitecture,
//     model_path: PathBuf,
//     #[arg(long, short = 'v')]
//     pub vocabulary_path: Option<PathBuf>,
//     #[arg(long, short = 'r')]
//     pub vocabulary_repository: Option<String>,
//     #[arg(long, short = 'q')]
//     pub query: Option<String>,
//     #[arg(long, short = 'c')]
//     pub comparands: Vec<String>,
// }

// fn main() {
//     let args = Args::parse();
//     let vocabulary_source = llm_base::VocabularySource::Model;
//     let model_architecture = args.model_architecture;
//     let model_path = args.model_path;
//     let query = args
//         .query
//         .as_deref()
//         .unwrap_or("My favourite animal is the dog");
//     let comparands = if !args.comparands.is_empty() {
//         args.comparands
//     } else {
//         vec![
//             "My favourite animal is the dog".to_string(),
//             "I have just adopted a cute dog".to_string(),
//             "My favourite animal is the cat".to_string(),
//         ]
//     };
    
//     let now = std::time::Instant::now();

//     let model = llm::load_dynamic(
//         model_architecture,
//         &model_path,
//         vocabulary_source,
//         Default::default(),
//         llm::load_progress_callback_stdout,
//     )
//     .unwrap_or_else(|err| {
//         panic!("Failed to load {model_architecture} model from {model_path:?}: {err}")
//     });

//     println!(
//         "Model fully loaded! Elapsed: {}ms",
//         now.elapsed().as_millis()
//     );
//     let query = "Hello";
//     let v  = get_embeddings(model.as_ref(), &llm::InferenceParameters::default(), query);
    
// }


// fn get_embeddings(
//     model: &dyn llm::Model,
//     inference_parameters: &llm::InferenceParameters,
//     query: &str,
// ) -> Vec<f32> {
//     let mut session = model.start_session(Default::default());
//     let mut output_request = llm::OutputRequest {
//         all_logits: None,
//         embeddings: Some(Vec::new()),
//     };
//     let vocab = model.vocabulary();
//     let beginning_of_sentence = true;
//     let query_token_ids = vocab
//         .tokenize(&format!(" {}", query), beginning_of_sentence)
//         .unwrap()
//         .iter()
//         .map(|(_, tok)| *tok)
//         .collect::<Vec<_>>();
//     model.evaluate(
//         &mut session,
//         inference_parameters,
//         &query_token_ids,
//         &mut output_request,
//     );
//     output_request.embeddings.unwrap()
// }