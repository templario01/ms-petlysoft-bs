/*
  Warnings:

  - You are about to drop the `_AppointmentToPet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserRoles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_AppointmentToPet" DROP CONSTRAINT "_AppointmentToPet_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_AppointmentToPet" DROP CONSTRAINT "_AppointmentToPet_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_UserRoles" DROP CONSTRAINT "_UserRoles_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_UserRoles" DROP CONSTRAINT "_UserRoles_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."appointments" DROP CONSTRAINT "appointments_veterinaryCenterId_fkey";

-- DropTable
DROP TABLE "public"."_AppointmentToPet";

-- DropTable
DROP TABLE "public"."_UserRoles";

-- CreateTable
CREATE TABLE "role_to_user" (
    "userId" UUID NOT NULL,
    "roleId" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "role_to_user_pkey" PRIMARY KEY ("userId","roleId")
);

-- CreateTable
CREATE TABLE "appointment_details" (
    "id" UUID NOT NULL,
    "appointmentId" UUID NOT NULL,
    "petId" UUID NOT NULL,
    "serviceId" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "appointment_details_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "role_to_user_userId_idx" ON "role_to_user"("userId");

-- CreateIndex
CREATE INDEX "role_to_user_roleId_idx" ON "role_to_user"("roleId");

-- CreateIndex
CREATE INDEX "appointment_details_appointmentId_idx" ON "appointment_details"("appointmentId");

-- CreateIndex
CREATE INDEX "appointment_details_petId_idx" ON "appointment_details"("petId");

-- CreateIndex
CREATE INDEX "appointment_details_serviceId_idx" ON "appointment_details"("serviceId");

-- AddForeignKey
ALTER TABLE "role_to_user" ADD CONSTRAINT "role_to_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_to_user" ADD CONSTRAINT "role_to_user_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment_details" ADD CONSTRAINT "appointment_details_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment_details" ADD CONSTRAINT "appointment_details_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment_details" ADD CONSTRAINT "appointment_details_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
