package controller

import (
	"context"
	"net/http"
	"simple-api-db-go/service"

	"github.com/gin-gonic/gin"
)

type HelloController struct {
	helloService *service.HelloService
}

func NewHelloController(helloService *service.HelloService) *HelloController {
	return &HelloController{
		helloService: helloService,
	}
}

func (h *HelloController) GetHello(c *gin.Context) {
	result, err := h.helloService.Save(context.Background())
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.String(http.StatusOK, result)
}
