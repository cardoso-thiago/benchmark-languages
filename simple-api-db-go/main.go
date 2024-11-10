package main

import (
	"simple-api-db-go/config"
	"simple-api-db-go/controller"
	"simple-api-db-go/repository"
	"simple-api-db-go/service"

	"github.com/gin-gonic/gin"
)

func main() {
	config.ConnectDatabase()
	defer config.DropTable() // Remover a tabela ao encerrar a aplicação

	uuidRepo := repository.NewUUIDRepository()
	helloService := service.NewHelloService(uuidRepo)
	helloController := controller.NewHelloController(helloService)

	fibonacciService := service.NewFibonacciService()
	fibonacciController := controller.NewFibonacciController(fibonacciService)

	router := gin.Default()
	router.GET("/hello", helloController.GetHello)

	router.POST("/fibonacci", fibonacciController.CalculateFibonacci)

	router.Run(":5175")
}
