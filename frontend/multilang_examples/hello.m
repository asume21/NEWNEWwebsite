function hello
    disp(greet('World'));
    disp(['Sum: ', num2str(add(3, 5))]);
end
function s = greet(name)
    s = ['Hello, ', name, '!'];
end
function s = add(a, b)
    s = a + b;
end
