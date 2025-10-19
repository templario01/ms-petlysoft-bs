import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../../../user/graphql-types/models/user.model';
import { registerEnumType } from '@nestjs/graphql';

export enum Sex {
  Male = 'Male',
  Female = 'Female',
}

registerEnumType(Sex, {
  name: 'Sex',
  description: 'The biological sex of the pet',
});

@ObjectType()
export class Pet {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  type: string;

  @Field(() => String, { nullable: true })
  breed?: string;

  @Field(() => String, { nullable: true })
  color?: string;

  @Field(() => Sex)
  sex: Sex;

  @Field(() => String)
  owner_id: string;

  @Field(() => User)
  owner: User;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
