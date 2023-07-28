/*
  Warnings:

  - You are about to drop the column `preferred_coding_langauge` on the `User` table. All the data in the column will be lost.
  - Added the required column `preferred_coding_language` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dob" DATETIME NOT NULL,
    "preferred_coding_language" TEXT NOT NULL
);
INSERT INTO "new_User" ("dob", "email", "id", "password", "username") SELECT "dob", "email", "id", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
