This is a Rust version of the binary translator I built with JavaScript and [Javy](https://github.com/bytecodealliance/javy).

## Pre-requisites
- [Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html)
- [wasm-pack](https://github.com/rustwasm/wasm-pack)
- [Node.js LTS](https://nodejs.org/en)

## Usage

Fork the repo, and build the translator library, running
```bash
$ wasm-pack build --target web
```

You can now start the vite server with 

```bash
$ npm run dev
```

At which point, you can use the translator to translate any string you enter in the input box.

## Debugging 

### From VS Code
Docs: https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_debugging-webassembly

### Rust Wasm modul with DWARF

> [!IMPORTANT]  
> Rust emits DWARF debug information. However, wasm-pack does not yet retain it during the build. So, instead of running wasm-pack build, users of the common wasm-bindgen/wasm-pack libraries should build manually build using the following commands:

```bash
$ cargo install wasm-bindgen-cli
```
once to install the necessary command-line tool.

```bash
$ cargo build --target wasm32-unknown-unkown 
```

to build your library. And

```bash
$ wasm-bindgen --keep-debug --out-dir pkg ./target/wasm32-unknown-unknown/debug/<library-name>.wasm <extra-arguments> 
```

to generate the WebAssembly bindings, replacing <library-name> with the name from your Cargo.toml and configuring <extra-arguments> as necessary.
