module HaskellKata where
main = putStrLn "Learning Haskell - Kata !!"

-- 1. first aka Head
first' [] = -1
first' (x:xs) = x

-- 2. removeFirst aka Tail
removeFirst [] = []
removeFirst (x:xs) = xs

-- 3. selectnth aka !! (R)
selectnth _ [] = -1
selectnth 0 (x:xs) = x
selectnth n (x:xs) = selectnth (n-1) xs
-- or
selectnth2 n xs = first' $ drop n xs

-- 4. selectFirstNth aka Take (R)
selectFirstNth _ [] = []
selectFirstNth 0 _ = []
selectFirstNth n (x:xs) = x : selectFirstNth (n-1) xs

-- 5. length' aka length (R)
length' xs = sum [1 | b <- xs]
--or
length2 [] = 0
length2 (_:  xs) = 1 + length2(xs)

-- 6. sum' aka sum (R)
sum' [] = 0
sum' (x:xs) = x + sum' xs

-- 7. reverse' aka reverse (R)
reverse' [] = []
reverse' (x:xs) = reverse' xs ++ [x]

-- 8. safetail
safetail1 [] = []
safetail1 (x:xs) = xs

safetail2 xs
	| xs == [] = []
	| otherwise = tail xs

safetail3 xs = if (null xs) then [] else tail xs

-- 9. logical or
or1 True True = True
or1 True False = True
or1 False True = True
or1 False False = False

or2 False False = False
or2 _ _ = True

or3 False x = x
or3 True _ = True

-- 10. Pythagorean triplets
pyths n = [(x,y,z) | x<-[1..n], y <- [1..n], z <- [1..n] , ((x*x) + (y*y) == (z*z))]

-- 11. Perfect Integer
getFactors n = [x | x <- [1..(n-1)], n `mod` x == 0 ]
perfects n = [y | y <- [1..n], sum (getFactors y) == y]

-- 12. Scaler product
scalerProduct xs ys =  sum $ [x*y | (x,y) <- (zip xs ys)]

-- 13. Quick sort
quickSort [] = []
quickSort (x:xs) = lesserHalf ++ [x] ++ greaterHalf
			where
				lesserHalf  = quickSort [y | y <- xs, y <= x]
				greaterHalf = quickSort [y | y <- xs, y > x]

-- 14. Merge sorted array
merge [] ys = ys
merge xs [] = xs
merge (x:xs) (y:ys)
	| x <= y = x : (merge xs (y:ys))
	| otherwise = y : (merge (x:xs) ys)

-- 15. express using map/filter
expressComprehension f p xs = [f x | x <- xs, p x]
expressMapFilter f p xs = map f $ filter p xs

-- 16. Map/Filter using recursion
mapRecursion f [] = []
mapRecursion f (x:xs) = f x : mapRecursion f xs

filterRecursion f [] = []
filterRecursion f (x:xs)
	| f x = x : filterRecursion f xs
	| otherwise = filterRecursion f xs

-- 17. Map/FIlter using foldr
mapFoldr f xs = foldr (\x acc -> f x : acc) [] xs
filterFoldr f xs = foldr (\x acc -> if (f x) then x : acc else acc) [] xs