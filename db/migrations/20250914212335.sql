-- Rename a column from "password" to "password_hash"
ALTER TABLE "public"."users" RENAME COLUMN "password" TO "password_hash";
