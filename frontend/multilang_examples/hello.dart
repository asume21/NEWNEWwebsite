String greet(String name) => 'Hello, $name!';
int add(int a, int b) => a + b;
void main() {
  print(greet('World'));
  print('Sum: \'${add(3, 5)}');
}
