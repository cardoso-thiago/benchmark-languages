package service

import (
	"math/big"
)

type FibonacciService struct{}

func NewFibonacciService() *FibonacciService {
	return &FibonacciService{}
}

func (s *FibonacciService) CalculateFibonacci(number int) *big.Int {
	if number <= 1 {
		return big.NewInt(int64(number))
	}
	a := big.NewInt(0)
	b := big.NewInt(1)
	for i := 2; i <= number; i++ {
		temp := new(big.Int).Add(a, b)
		a.Set(b)
		b.Set(temp)
	}
	return b
}
