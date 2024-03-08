// src/lib.rs
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn word_to_binary(word: &str) -> Vec<u8> {
    let mut binary_data = Vec::new();

    for ch in word.chars() {
        let char_code = ch as u8;
        let binary_representation = format!("{:08b}", char_code);

        let padded_binary = binary_representation.chars().map(|c| c.to_digit(10).unwrap() as u8);

        binary_data.extend(padded_binary);
    }

    binary_data
}
