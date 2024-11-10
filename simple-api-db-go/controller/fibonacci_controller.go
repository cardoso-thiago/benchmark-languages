package controller

import (
	"net/http"
	"simple-api-db-go/model"
	"simple-api-db-go/service"

	"github.com/gin-gonic/gin"
)

type FibonacciController struct {
	fibonacciService *service.FibonacciService
}

func NewFibonacciController(fibonacciService *service.FibonacciService) *FibonacciController {
	return &FibonacciController{fibonacciService: fibonacciService}
}

func (ctrl *FibonacciController) CalculateFibonacci(c *gin.Context) {
	var input model.Fibonacci
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	result := ctrl.fibonacciService.CalculateFibonacci(input.Number)

	c.JSON(http.StatusOK, gin.H{
		"result": result.String(),
	})
}
