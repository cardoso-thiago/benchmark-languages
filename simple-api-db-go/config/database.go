package config

import (
	"context"
	"log"

	"github.com/jackc/pgx/v4/pgxpool"
)

var DB *pgxpool.Pool

func ConnectDatabase() {
	dsn := "postgres://user:pass@localhost:5432/db"

	var err error
	DB, err = pgxpool.Connect(context.Background(), dsn)
	if err != nil {
		log.Fatalf("Unable to connect to database: %v\n", err)
	}

	log.Println("Connected to database")
	createTable()
}

func createTable() {
	_, err := DB.Exec(context.Background(), `
        CREATE TABLE IF NOT EXISTS uuids (
            id SERIAL PRIMARY KEY,
            uuid UUID NOT NULL
        );
    `)
	if err != nil {
		log.Fatalf("Failed to create table: %v\n", err)
	}

	log.Println("Table created or already exists")
}

func DropTable() {
	_, err := DB.Exec(context.Background(), "DROP TABLE IF EXISTS uuids;")
	if err != nil {
		log.Printf("Failed to drop table: %v\n", err)
	} else {
		log.Println("Table dropped successfully")
	}
}
