greet <- function(name) {
  paste("Hello,", name, "!")
}
add <- function(a, b) {
  a + b
}
cat(greet("World"), "\n")
cat("Sum:", add(3, 5), "\n")
