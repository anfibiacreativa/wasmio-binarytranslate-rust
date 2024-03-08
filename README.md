- Build with cargo/wasm-pack "wasm-pack build --target web"
- Start a server with for example "python3 -m http.server"


from vscode docs: https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_debugging-webassembly

Rust: Rust emits DWARF debug information. However, wasm-pack does not yet retain it during the build. So, instead of running wasm-pack build, users of the common wasm-bindgen/wasm-pack libraries should build manually build using two commands:
cargo install wasm-bindgen-cli once to install the necessary command-line tool.
cargo build --target wasm32-unknown-unkown to build your library.
wasm-bindgen --keep-debug --out-dir pkg ./target/wasm32-unknown-unknown/debug/<library-name>.wasm <extra-arguments> to generate the WebAssembly bindings, replacing <library-name> with the name from your Cargo.toml and configuring <extra-arguments> as necessary.
