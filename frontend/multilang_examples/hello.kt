fun greet(name: String): String = "Hello, $name!"
fun add(a: Int, b: Int): Int = a + b
fun main() {
    println(greet("World"))
    println("Sum: ${add(3, 5)}")
}
