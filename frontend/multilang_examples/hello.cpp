#include <iostream>
#include <string>
std::string greet(const std::string& name) {
    return "Hello, " + name + "!";
}
int add(int a, int b) {
    return a + b;
}
int main() {
    std::cout << greet("World") << std::endl;
    std::cout << "Sum: " << add(3, 5) << std::endl;
    return 0;
}
