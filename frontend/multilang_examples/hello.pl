greet(Name, Greeting) :-
    format(string(Greeting), "Hello, ~w!", [Name]).
add(A, B, Sum) :-
    Sum is A + B.
:- greet('World', G), writeln(G), add(3, 5, S), format('Sum: ~w~n', [S]).
