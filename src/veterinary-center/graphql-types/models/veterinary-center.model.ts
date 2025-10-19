import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PetService } from '../../../pet-service/graphql-types/models/pet-service.model';
import { Inventory } from '../../../inventory/graphql-types/models/inventory.model';
import { User } from '../../../user/graphql-types/models/user.model';

@ObjectType()
export class VeterinaryCenter {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => [User], { nullable: true })
  users?: User[];

  @Field(() => [PetService], { nullable: true })
  petServices?: PetService[];

  @Field(() => [Inventory], { nullable: true })
  inventories?: Inventory[];
}
