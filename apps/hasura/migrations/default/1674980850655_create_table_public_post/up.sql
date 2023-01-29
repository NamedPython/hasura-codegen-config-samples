CREATE TABLE "public"."post" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "slug" text NOT NULL, "status_key" text NOT NULL, "author_id" uuid NOT NULL, "title" text NOT NULL, "body" text, "publish_at" timestamptz, "published_at" timestamptz, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("author_id") REFERENCES "public"."people"("id") ON UPDATE cascade ON DELETE restrict, FOREIGN KEY ("status_key") REFERENCES "public"."post_status"("key") ON UPDATE cascade ON DELETE restrict, UNIQUE ("author_id", "slug"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_post_updated_at"
BEFORE UPDATE ON "public"."post"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_post_updated_at" ON "public"."post" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
