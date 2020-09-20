CREATE TABLE "public"."OneMoreUser" (
    email TEXT
)

ALTER TABLE "public"."OneMoreUser" ADD CONSTRAINT 
"OneMoreUser_email_unique_constraint" UNIQUE (email)
