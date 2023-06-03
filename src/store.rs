
use serde::{Deserialize, Serialize};
use worker::*;

use crate::index::{self, Document};


#[derive(Deserialize, Debug, Serialize)]
pub struct AccountStorage {
    pub docs: Vec<Document>,
}

/// Store is responsible for managing persisting Documents and other objects in whatever form (as 
/// KV, D1, or locally (for testing)).
pub struct Store {
    pub kv_key: String,
    pub kv_store: worker::kv::KvStore,
}

impl Store {
    pub fn new(kv_store: worker::kv::KvStore, kv_key: String) -> Store {
        Store { 
            kv_key,
            kv_store
        }
    }

    async fn get_storage_for(&self, acct: &String) -> worker::Result<Option<AccountStorage>> {
        self.kv_store.get(&acct).json::<AccountStorage>().await.map_err(From::from)
    }

    pub async fn add_document(&self, acct: String, d: index::Document) -> Result<()> {
        return match self.get_storage_for(&acct).await {
            Err(e) => {
                Result::Err(e.into())
            }
            Ok(opt_acct_storage) => {

                // Get Existing 
                let acct_storage: AccountStorage;
                match opt_acct_storage {
                    Some(mut existing) => {
                        existing.docs.push(d);
                        acct_storage = existing;
                    }
                    None => {
                        acct_storage = AccountStorage{docs: Vec::from([d])}
                    }
                }

                // Update List
                return match self.kv_store.put::<AccountStorage>(&acct, acct_storage) {
                    Ok(_) => Result::Ok(()),
                    Err(e) => {
                        Result::Err(e.into())
                    }
                }
            }
        }
    }

    pub async fn get_documents(&self, acct: String) -> Result<Vec<Document>> {
        return match self.get_storage_for(&acct).await {
            Err(e) => {
                Result::Err(e.into())
            }
            Ok(opt_acct_storage) => {
                match opt_acct_storage {
                    Some(existing) => {
                        Result::Ok(existing.docs)
                    }
                    None => {
                        Result::Ok(Vec::new())
                    }
                }
            }
        }
    }
}
