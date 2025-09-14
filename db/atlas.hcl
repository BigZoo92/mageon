env "dev" {
  url = getenv("DATABASE_URL")         # postgres://app:app@db:5432/appdb?sslmode=disable
  dev = getenv("ATLAS_DEV_URL")        # postgres://app:app@db:5432/atlas_dev?sslmode=disable
  src = "file://schema.sql"
  migration { dir = "file://migrations" }
}
