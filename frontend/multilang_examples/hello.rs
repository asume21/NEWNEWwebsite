fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
fn add(a: i32, b: i32) -> i32 {
    a + b
}
fn main() {
    println!("{}", greet("World"));
    println!("Sum: {}", add(3, 5));
}
