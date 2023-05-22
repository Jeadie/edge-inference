use cfg_if::cfg_if;
use worker::{console_log, Date, Request};

// We define a function `set_panic_hook` based on the config 'console_error_panic_hook'. If set, we
// debug panics on wasm32-unknown-unknown by providing a panic hook that forwards panic messages to
// console.error; see https://github.com/rustwasm/console_error_panic_hook#readme.Otherwise, empty
// function.
cfg_if! {
    if #[cfg(feature = "console_error_panic_hook")] {
        extern crate console_error_panic_hook;
        pub use self::console_error_panic_hook::set_once as set_panic_hook;
    } else {
        #[inline]
        pub fn set_panic_hook() {}
    }
}

pub fn log_request(req: &Request) {
    console_log!(
        "{} - [{}], located at: {:?}, within: {}",
        Date::now().to_string(),
        req.path(),
        req.cf().coordinates().unwrap_or_default(),
        req.cf().region().unwrap_or("unknown region".into())
    );
}