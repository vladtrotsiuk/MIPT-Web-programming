package main

import "unicode"

func RemoveEven(arr []int) []int {
    res := make([]int, 0)
    for _, elem := range arr {
        if elem % 2 == 1 {
            res = append(res, elem)
        }
    }
    return res
}

func PowerGenerator(a int) func() int {
    res := 1
    return func() int {
        res *= a
        return res
    }
}

func DifferentWordsCount(x string) int {
    word := ""
    set := make(map[string]bool)
    res := 0
    for _, c := range (x + " ") {
        if unicode.IsLetter(c) {
            word += string(unicode.ToLower(c))
        } else if word != "" {
            if !set[word] {
                res += 1
            }
            set[word] = true
            word = ""
        }
    }
    return res
}