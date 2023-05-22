use worker::*;

mod utils;
mod handler;

#[event(fetch)]
pub async fn main(req: Request, env: Env, _ctx: worker::Context) -> Result<Response> {
    utils::log_request(&req);

    // Based on the config 'console_error_panic_hook'
    utils::set_panic_hook();

    let router = Router::new();

    router
        .get("/", handler::get_base)
        .get("/worker-version", handler::get_worker_version)
        .run(req, env)
        .await
}
