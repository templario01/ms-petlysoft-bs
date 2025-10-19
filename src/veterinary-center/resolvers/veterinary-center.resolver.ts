import { Resolver, Query, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { GetVeterinaryCenterUseCase } from '../use-cases/get-veterinary-center.ise-case';
import { VeterinaryCenter } from '../graphql-types/models/veterinary-center.model';

@Resolver()
export class VeterinaryCenterResolver {
  constructor(
    private readonly getVeterinaryCenterUseCase: GetVeterinaryCenterUseCase,
  ) {}

  @Query(() => VeterinaryCenter)
  async veterinaryCenter(@Args('id') id: string) {
    return this.getVeterinaryCenterUseCase.execute(id);
  }
}
