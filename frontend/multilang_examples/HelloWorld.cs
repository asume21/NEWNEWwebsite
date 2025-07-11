using System;
class HelloWorld {
    static string Greet(string name) => $"Hello, {name}!";
    static int Add(int a, int b) => a + b;
    static void Main() {
        Console.WriteLine(Greet("World"));
        Console.WriteLine($"Sum: {Add(3, 5)}");
    }
}
