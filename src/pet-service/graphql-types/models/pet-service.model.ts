import { Field, ID, ObjectType } from '@nestjs/graphql';
import { VeterinaryCenter } from '../../../veterinary-center/graphql-types/models/veterinary-center.model';

@ObjectType()
export class PetService {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  veterinaryCenterId?: string;

  @Field(() => VeterinaryCenter, { nullable: true })
  VeterinaryCenter?: VeterinaryCenter;
}
