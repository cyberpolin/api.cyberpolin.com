-- CreateTable
CREATE TABLE "Hire" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "content" TEXT NOT NULL DEFAULT '',
    "attended" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Hire_pkey" PRIMARY KEY ("id")
);
