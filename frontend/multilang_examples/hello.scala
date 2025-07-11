object HelloWorld {
  def greet(name: String): String = s"Hello, $name!"
  def add(a: Int, b: Int): Int = a + b
  def main(args: Array[String]): Unit = {
    println(greet("World"))
    println(s"Sum: ${add(3, 5)}")
  }
}
