using System.Numerics;

namespace SimpleApiDbDotnet.Services;

public class FibonacciService : IFibonacciService
{
    public BigInteger CalculateFibonacci(int number)
    {
        if (number <= 1)
        {
            return number;
        }
        
        BigInteger a = 0;
        BigInteger b = 1;

        for (var i = 2; i <= number; i++)
        {
            var temp = a + b;
            a = b;
            b = temp;
        }

        return b;
    }
}