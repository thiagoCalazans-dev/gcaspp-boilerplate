/*
  Warnings:

  - Added the required column `value` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "incomingId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    CONSTRAINT "Product_incomingId_fkey" FOREIGN KEY ("incomingId") REFERENCES "Incoming" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("id", "incomingId", "name") SELECT "id", "incomingId", "name" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
