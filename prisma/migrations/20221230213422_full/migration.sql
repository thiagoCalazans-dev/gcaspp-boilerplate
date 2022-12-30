-- CreateTable
CREATE TABLE "Supplier" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "incomingId" INTEGER NOT NULL,
    CONSTRAINT "Product_incomingId_fkey" FOREIGN KEY ("incomingId") REFERENCES "Incoming" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Incoming" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "supplierId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    CONSTRAINT "Incoming_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
