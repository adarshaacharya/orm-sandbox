CREATE TABLE "public"."product" (
    price NUMERIC CONSTRAINT price_value_check CHECK (price > 0.01 AND price <> 1240.00)
);


ALTER TABLE "public"."product"
    ADD COLUMN "productid" serial,
    ADD PRIMARY KEY ("productid");