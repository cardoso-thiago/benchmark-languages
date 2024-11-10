package repository

import (
	"context"
	"fmt"
	"simple-api-db-go/config"
	"simple-api-db-go/model"
)

type UUIDRepository struct{}

func NewUUIDRepository() *UUIDRepository {
	return &UUIDRepository{}
}

func (r *UUIDRepository) Save(ctx context.Context, entity *model.UUIDEntity) error {
	query := "INSERT INTO uuids (uuid) VALUES ($1) RETURNING id"
	err := config.DB.QueryRow(ctx, query, entity.UUID).Scan(&entity.ID)
	if err != nil {
		return fmt.Errorf("failed to save UUID: %w", err)
	}
	return nil
}

func (r *UUIDRepository) FindById(ctx context.Context, id int) (*model.UUIDEntity, error) {
	query := "SELECT id, uuid FROM uuids WHERE id = $1"
	var entity model.UUIDEntity
	err := config.DB.QueryRow(ctx, query, id).Scan(&entity.ID, &entity.UUID)
	if err != nil {
		return nil, fmt.Errorf("UUID not found: %w", err)
	}
	return &entity, nil
}
