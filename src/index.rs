use serde::Deserialize;


#[derive(Deserialize, Debug)]
pub struct Document {
    id: Option<String>,

    #[serde(flatten)]
    extra: std::collections::HashMap<String, serde_json::Value>,

}

#[derive(Deserialize, Debug)]
pub struct AddDocumentsRequest {
    index: String,
    doc: Document,
}
