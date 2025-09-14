-- Enum
CREATE TYPE user_role AS ENUM ('superadmin', 'admin', 'pending');

-- Table users
CREATE TABLE IF NOT EXISTS public.users (
  id                BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email             TEXT        NOT NULL,
  username          TEXT        NOT NULL,
  password_hash     TEXT        NOT NULL,
  role              user_role   NOT NULL DEFAULT 'admin',
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),

  CONSTRAINT users_email_len_chk    CHECK (length(email) BETWEEN 5 AND 320),
  CONSTRAINT users_username_len_chk CHECK (length(username) BETWEEN 3 AND 32)
);

-- Unicité
CREATE UNIQUE INDEX IF NOT EXISTS users_email_lower_ux
  ON public.users (lower(email));

