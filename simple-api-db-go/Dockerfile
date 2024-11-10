FROM golang:1.23.2-alpine AS builder

WORKDIR /app
COPY . .
RUN go mod tidy && go build -o simple-api-db-go main.go

FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/simple-api-db-go .
EXPOSE 5175
CMD ["./simple-api-db-go"]