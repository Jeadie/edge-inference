use worker::{Request, RouteContext, Response, Result};

use crate::model;

pub fn get_base<D>(_req: Request, _ctx: RouteContext<D>) -> Result<Response> {
    Response::ok("Responding on the edge!")
}

pub fn get_worker_version<D>(_req: Request, ctx: RouteContext<D>) -> Result<Response> {
    let version = ctx.var("WORKERS_RS_VERSION")?.to_string();
    Response::ok(version)
}

pub fn test_model_inference<D>(_req: Request, ctx: RouteContext<D>) -> Result<Response> {
    let llm_model: Box<dyn llm::Model> =  model::create_model(Option::None, Option::None, "{}");

    if let Some(q) = ctx.param("q") {
        match model::embed(q, llm_model) {
            Ok(vec) => {
                Response::ok(format!("{:?}", vec))
            }
            Err(e) => {
                Response::error(e.to_string(), 1)
            }
        }
    } else {
        Response::error("No query parameter provided", 400)
    }

}