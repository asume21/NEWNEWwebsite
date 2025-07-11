<?php
function greet($name) {
    return "Hello, $name!";
}
function add($a, $b) {
    return $a + $b;
}
echo greet("World") . "\n";
echo "Sum: " . add(3, 5) . "\n";
