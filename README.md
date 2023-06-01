# edge
AI search on the edge 

## Issues I am tracking:
- Seeing if I can use rustformers/llm for target="wasm32-unknown-unknown", https://github.com/rustformers/llm/issues/193
- Problem with embeddings from rustformers/llm, https://github.com/rustformers/llm/issues/288

## TODO List

### Search/storage size
- [x] Select basic rust ANN library and/or server: Using Qdrant for now
  - [x] Bundle and run locally
- [ ] Check if we need to Webassembly run on Cloudflare workers
- [ ] Get Cloudflare account
- [ ] Possible storage compression
- [ ] Possible edge storage for large fields

### Model Size
- [ ] Best way to run model on edge
- [ ] How to make model smaller
  - [ ] Transformer size
  - [ ] Sparsity reduction

### Others
 - [ ] Ideal beta customers
 - [ ] Auth

