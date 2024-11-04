package br.com.cardoso.controller;

import br.com.cardoso.model.Fibonacci;
import br.com.cardoso.service.FibonacciService;
import br.com.cardoso.service.HelloService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigInteger;

@RestController
public class HelloController {

    private final HelloService helloService;
    private final FibonacciService fibonacciService;

    public HelloController(HelloService helloService, FibonacciService fibonacciService) {
        this.helloService = helloService;
        this.fibonacciService = fibonacciService;
    }

    @GetMapping("/hello")
    public ResponseEntity<String> getHello() {
        return ResponseEntity.ok(helloService.save());
    }

    @PostMapping("/fibonacci")
    public ResponseEntity<BigInteger> calculateFibonacci(@RequestBody Fibonacci fibonacci) {
        int number = fibonacci.number();
        return ResponseEntity.ok(fibonacciService.calculateFibonacci(number));
    }
}
