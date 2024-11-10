package model

import "github.com/google/uuid"

type UUIDEntity struct {
	ID   int       `db:"id"`
	UUID uuid.UUID `db:"uuid"`
}
