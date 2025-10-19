/*
  Warnings:

  - You are about to drop the column `serviceId` on the `appointment_details` table. All the data in the column will be lost.
  - You are about to drop the column `articleId` on the `receipt_details` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `receipt_details` table. All the data in the column will be lost.
  - You are about to drop the `articles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `services` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `petServiceId` to the `appointment_details` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."appointment_details" DROP CONSTRAINT "appointment_details_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "public"."articles" DROP CONSTRAINT "articles_veterinaryCenterId_fkey";

-- DropForeignKey
ALTER TABLE "public"."receipt_details" DROP CONSTRAINT "receipt_details_articleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."receipt_details" DROP CONSTRAINT "receipt_details_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "public"."services" DROP CONSTRAINT "services_veterinaryCenterId_fkey";

-- DropIndex
DROP INDEX "public"."appointment_details_serviceId_idx";

-- DropIndex
DROP INDEX "public"."receipt_details_articleId_idx";

-- DropIndex
DROP INDEX "public"."receipt_details_serviceId_idx";

-- AlterTable
ALTER TABLE "appointment_details" DROP COLUMN "serviceId",
ADD COLUMN     "petServiceId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "receipt_details" DROP COLUMN "articleId",
DROP COLUMN "serviceId",
ADD COLUMN     "inventoryId" UUID,
ADD COLUMN     "petServiceId" UUID;

-- AlterTable
ALTER TABLE "receipts" ADD COLUMN     "userId" UUID;

-- DropTable
DROP TABLE "public"."articles";

-- DropTable
DROP TABLE "public"."services";

-- CreateTable
CREATE TABLE "inventories" (
    "id" UUID NOT NULL,
    "type" "ArticleType" NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "veterinaryCenterId" UUID,

    CONSTRAINT "inventories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pet_services" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "veterinaryCenterId" UUID,

    CONSTRAINT "pet_services_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "appointment_details_petServiceId_idx" ON "appointment_details"("petServiceId");

-- CreateIndex
CREATE INDEX "receipt_details_inventoryId_idx" ON "receipt_details"("inventoryId");

-- CreateIndex
CREATE INDEX "receipt_details_petServiceId_idx" ON "receipt_details"("petServiceId");

-- AddForeignKey
ALTER TABLE "appointment_details" ADD CONSTRAINT "appointment_details_petServiceId_fkey" FOREIGN KEY ("petServiceId") REFERENCES "pet_services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventories" ADD CONSTRAINT "inventories_veterinaryCenterId_fkey" FOREIGN KEY ("veterinaryCenterId") REFERENCES "veterinary_centers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pet_services" ADD CONSTRAINT "pet_services_veterinaryCenterId_fkey" FOREIGN KEY ("veterinaryCenterId") REFERENCES "veterinary_centers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receipts" ADD CONSTRAINT "receipts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receipt_details" ADD CONSTRAINT "receipt_details_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "inventories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receipt_details" ADD CONSTRAINT "receipt_details_petServiceId_fkey" FOREIGN KEY ("petServiceId") REFERENCES "pet_services"("id") ON DELETE SET NULL ON UPDATE CASCADE;
