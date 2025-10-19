import { Injectable } from '@nestjs/common';
import { VeterinaryCenter } from '@prisma/client';
import { PrismaService } from '../common/intrastructure/database/prisma.service';

@Injectable()
export class VeterinaryCenterRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    name: string;
    address?: string;
    phone?: string;
  }): Promise<VeterinaryCenter> {
    return this.prisma.veterinaryCenter.create({
      data,
    });
  }

  async findAll(): Promise<VeterinaryCenter[]> {
    return this.prisma.veterinaryCenter.findMany({
      include: {
        users: true,
        petServices: true,
        inventories: true,
      },
    });
  }

  async findById(id: string): Promise<VeterinaryCenter | null> {
    return this.prisma.veterinaryCenter.findUnique({
      where: { id },
      include: {
        users: true,
        petServices: true,
        inventories: true,
      },
    });
  }

  async update(
    id: string,
    data: {
      name?: string;
      address?: string;
      phone?: string;
    },
  ): Promise<VeterinaryCenter> {
    return this.prisma.veterinaryCenter.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<VeterinaryCenter> {
    return this.prisma.veterinaryCenter.delete({
      where: { id },
    });
  }

  async findByName(name: string): Promise<VeterinaryCenter[]> {
    return this.prisma.veterinaryCenter.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
      include: {
        users: true,
        petServices: true,
        inventories: true,
      },
    });
  }
}