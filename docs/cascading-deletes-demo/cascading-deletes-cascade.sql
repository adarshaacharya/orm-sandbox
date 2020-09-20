-- CREATE TABLE "public"."AnotherUser"(
--     id SERIAL PRIMARY KEY,
--     name TEXT
-- );

CREATE TABLE "public"."AnotherPost" (
    id SERIAL PRIMARY KEY,
    title TEXT,
    "authorId" INTEGER,
    CONSTRAINT author FOREIGN KEY ("authorId")
    REFERENCES "public"."AnotherUser" (id)
    ON DELETE CASCADE
);

