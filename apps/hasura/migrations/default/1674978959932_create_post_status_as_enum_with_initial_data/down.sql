
DELETE FROM "public"."post_status" WHERE "key" IN ('PUBLISH_SCHEDULED', 'PUBLISHED', 'DRAFT');

DROP TABLE "public"."post_status";
