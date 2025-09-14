-- name: CreateUser :one
INSERT INTO users (email, username, password_hash, role)
VALUES ($1, $2, $3, $4)
RETURNING id, email, username, password_hash, role, created_at;

-- name: GetUserByID :one
SELECT id, email, username, password_hash, role, created_at
FROM users
WHERE id = $1;

-- name: GetUserByEmail :one
SELECT id, email, username, password_hash, role, created_at
FROM users
WHERE lower(email) = lower($1);

-- name: ListUsers :many
SELECT id, email, username, password_hash, role, created_at
FROM users
ORDER BY created_at DESC
LIMIT $1 OFFSET $2;
