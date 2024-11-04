using System.Numerics;

namespace SimpleApiDbDotnet.Services;

public interface IFibonacciService
{
    BigInteger CalculateFibonacci(int number);
}