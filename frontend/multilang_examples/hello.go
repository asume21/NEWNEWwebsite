package main
import "fmt"
func greet(name string) string {
    return fmt.Sprintf("Hello, %s!", name)
}
func add(a, b int) int {
    return a + b
}
func main() {
    fmt.Println(greet("World"))
    fmt.Println("Sum:", add(3, 5))
}
