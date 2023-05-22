use worker::{Request, RouteContext, Response, Result};



pub fn get_base<D>(_req: Request, _ctx: RouteContext<D>) -> Result<Response> {
    Response::ok("Responding on the edge!")
}

pub fn get_worker_version<D>(_req: Request, ctx: RouteContext<D>) -> Result<Response> {
    let version = ctx.var("WORKERS_RS_VERSION")?.to_string();
    Response::ok(version)
}
