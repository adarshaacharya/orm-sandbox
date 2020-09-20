CREATE TABLE "public"."OneMoreUser" (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE "public"."OneMorePost" (
    id SERIAL PRIMARY KEY,
    title TEXT,
    "authorId" INTEGER,
    CONSTRAINT author FOREIGN KEY ("authorId") REFERENCES "public.OneMoreUser" (id) ON DELETE NO ACTION
);