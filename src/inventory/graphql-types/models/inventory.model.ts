import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { VeterinaryCenter } from '../../../veterinary-center/graphql-types/models/veterinary-center.model';
import { registerEnumType } from '@nestjs/graphql';

export enum ArticleType {
  medicine = 'medicine',
  general = 'general',
}

registerEnumType(ArticleType, {
  name: 'ArticleType',
});

@ObjectType()
export class Inventory {
  @Field(() => ID)
  id: string;

  @Field(() => ArticleType)
  type: ArticleType;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Int)
  stock: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  veterinaryCenterId?: string;

  @Field(() => VeterinaryCenter, { nullable: true })
  VeterinaryCenter?: VeterinaryCenter;
}
