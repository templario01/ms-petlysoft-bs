import { Injectable, NotFoundException } from '@nestjs/common';
import { VeterinaryCenterRepository } from '../../repositories/veterinary-center.repository';
import { VeterinaryCenter } from '../graphql-types/models/veterinary-center.model';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class GetVeterinaryCenterUseCase {
  constructor(
    private readonly veterinaryCenterRepository: VeterinaryCenterRepository,
  ) {}

  async execute(id: string): Promise<VeterinaryCenter> {
    const veterinaryCenter = await this.veterinaryCenterRepository.findById(id);
    if (!veterinaryCenter) {
      throw new NotFoundException('Veterinary Center not found');
    }
    return plainToInstance(VeterinaryCenter, {
        createdAt: veterinaryCenter.createdAt,
        updatedAt: veterinaryCenter.updatedAt,
        id: veterinaryCenter.id,
        name: veterinaryCenter.name,
        address: veterinaryCenter.address,
        phone: veterinaryCenter.phone,
    } as VeterinaryCenter);
  }
}
