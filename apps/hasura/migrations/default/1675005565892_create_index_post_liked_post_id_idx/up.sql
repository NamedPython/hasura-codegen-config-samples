CREATE  INDEX "post_liked_post_id_idx" on
  "public"."post_liked" using hash ("post_id");
