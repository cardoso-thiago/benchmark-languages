package br.com.cardoso.service.impl;

import br.com.cardoso.service.FibonacciService;
import org.springframework.stereotype.Service;

import java.math.BigInteger;

@Service
public class FibonacciServiceImpl implements FibonacciService {

    @Override
    public BigInteger calculateFibonacci(int number) {
        if (number <= 1) {
            return BigInteger.valueOf(number);
        }
        BigInteger a = BigInteger.ZERO;
        BigInteger b = BigInteger.ONE;
        for (int i = 2; i <= number; i++) {
            BigInteger temp = a.add(b);
            a = b;
            b = temp;
        }
        return b;
    }
}
