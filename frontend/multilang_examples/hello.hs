greet :: String -> String
greet name = "Hello, " ++ name ++ "!"
add :: Int -> Int -> Int
add a b = a + b
main :: IO ()
main = do
    putStrLn (greet "World")
    putStrLn ("Sum: " ++ show (add 3 5))
