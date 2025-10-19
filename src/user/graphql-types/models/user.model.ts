import { Field, ID, ObjectType } from '@nestjs/graphql';
import { VeterinaryCenter } from '../../../veterinary-center/graphql-types/models/veterinary-center.model';
import { Role } from './role.model';
import { Pet } from '../../../pet/graphql-types/models/pet.model';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  dni?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  license?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  veterinaryCenterId?: string;

  @Field(() => VeterinaryCenter, { nullable: true })
  VeterinaryCenter?: VeterinaryCenter;

  @Field(() => [Role], { nullable: true })
  roles?: Role[];

  @Field(() => [Pet], { nullable: true })
  pets?: Pet[];
}
