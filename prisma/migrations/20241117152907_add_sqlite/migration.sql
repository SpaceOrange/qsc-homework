-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "answer" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
