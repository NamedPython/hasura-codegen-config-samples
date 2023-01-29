
CREATE TABLE "public"."post_status" ("key" text NOT NULL, "label" text NOT NULL, PRIMARY KEY ("key") );

INSERT INTO "public"."post_status"("key", "label")
VALUES
  (E'DRAFT', E'下書き'),
  (E'PUBLISHED', E'公開済み'),
  (E'PUBLISH_SCHEDULED', E'公開予約済み');
