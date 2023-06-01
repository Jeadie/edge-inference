use serde::Deserialize;


#[derive(Deserialize, Debug)]
pub struct SearchRequest {
    index: String,
    query: String,
}

