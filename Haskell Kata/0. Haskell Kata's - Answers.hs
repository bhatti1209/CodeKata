double' x = x+ x

repeat' f a = a : repeat' f (f a)

next' n a = (a + (n/a))/2
