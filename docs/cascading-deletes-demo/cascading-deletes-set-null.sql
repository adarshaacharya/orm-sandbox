CREATE TABLE "public"."AlmostTheLastUser" (
  id SERIAL PRIMARY KEY,
  name TEXT
);
CREATE TABLE "public"."AlmostTheLastPost" (
  id SERIAL PRIMARY KEY,
  title TEXT,
  "authorId" INTEGER,
  CONSTRAINT author FOREIGN KEY ("authorId") REFERENCES "public"."AlmostTheLastUser" (id) ON DELETE SET NULL
);
