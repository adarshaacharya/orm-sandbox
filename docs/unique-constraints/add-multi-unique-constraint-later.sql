CREATE TABLE "public"."TheLastUser" (
    "firstName" TEXT,
    "lastName" TEXT
);

ALTER TABLE "public"."TheLastUser"
ADD CONSTRAINT "TheLastUser_firstName_lastName_unique_constraint" UNIQUE (firstName, lastName);