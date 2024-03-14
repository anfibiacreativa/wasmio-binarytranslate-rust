// src/lib.rs
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn word_to_binary(word: &str) -> Result<Vec<u8>, JsValue> {
    // check if the input contains only alphanumeric characters, no special chars allowed
    if !word.chars().all(|c| c.is_ascii_alphanumeric()) {
        return Err(JsValue::from_str("Oooops! There was an error. But what errror?!?!?!"));
    }

    let mut binary_data = Vec::new();

    for ch in word.chars() {
        let char_code = ch as u8;
        let binary_representation = format!("{:08b}", char_code);

        let padded_binary = binary_representation.chars().map(|c| c.to_digit(10).unwrap() as u8);

        binary_data.extend(padded_binary);
    }

    Ok(binary_data)
}
