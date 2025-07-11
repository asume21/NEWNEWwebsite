#include <stdio.h>
char* greet(char* name, char* buffer) {
    sprintf(buffer, "Hello, %s!", name);
    return buffer;
}
int add(int a, int b) {
    return a + b;
}
int main() {
    char buffer[50];
    printf("%s\n", greet("World", buffer));
    printf("Sum: %d\n", add(3, 5));
    return 0;
}
