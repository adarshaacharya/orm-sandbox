Work flow :

1.  Change your database schema using SQL `(e.g. CREATE TABLE, ALTER TABLE, ...)`

``` npm install prisma --save-dev   ```

2.  Run `prisma introspect` to introspect the database and add application models to the Prisma schema

```     npm install @prisma/client  ```

3.  Run `prisma generate` to update your Prisma Client API

