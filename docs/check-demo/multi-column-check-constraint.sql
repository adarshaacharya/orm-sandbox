CREATE TABLE "public"."anotherproduct" (
    reducedprice NUMERIC CONSTRAINT reduced_price_check CHECK (price > reducedprice),
    price NUMERIC
)

ALTER TABLE "public"."anotherproduct"
ADD COLUMN "productid" serial,
ADD PRIMARY KET ("productid")
