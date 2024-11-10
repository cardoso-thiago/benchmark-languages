package service

import (
	"context"
	"simple-api-db-go/model"
	"simple-api-db-go/repository"

	"github.com/google/uuid"
)

type HelloService struct {
	uuidRepository *repository.UUIDRepository
}

func NewHelloService(repo *repository.UUIDRepository) *HelloService {
	return &HelloService{
		uuidRepository: repo,
	}
}

func (h *HelloService) Save(ctx context.Context) (string, error) {
	newUUID := uuid.New()

	entity := &model.UUIDEntity{
		UUID: newUUID,
	}

	if err := h.uuidRepository.Save(ctx, entity); err != nil {
		return "", err
	}

	savedEntity, err := h.uuidRepository.FindById(ctx, entity.ID)
	if err != nil {
		return "", err
	}

	return savedEntity.UUID.String(), nil
}
