-- Create enum type "user_role"
CREATE TYPE "public"."user_role" AS ENUM ('superadmin', 'admin', 'pending');
-- Create "users" table
CREATE TABLE "public"."users" (
  "id" bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
  "email" text NOT NULL,
  "username" text NOT NULL,
  "password" text NOT NULL,
  "role" "public"."user_role" NOT NULL DEFAULT 'admin',
  "created_at" timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY ("id"),
  CONSTRAINT "users_email_len_chk" CHECK ((length(email) >= 5) AND (length(email) <= 320)),
  CONSTRAINT "users_username_len_chk" CHECK ((length(username) >= 3) AND (length(username) <= 32))
);
-- Create index "users_email_lower_ux" to table: "users"
CREATE UNIQUE INDEX "users_email_lower_ux" ON "public"."users" ((lower(email)));
