import { InputType, Field } from '@nestjs/graphql';

import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsOptional,
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Column } from 'typeorm';
import { Role } from '../entities/role.enum';

/* https://github.com/typestack/class-validator/issues/486 */
export function Match(property: string, validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: MatchConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'Match' })
export class MatchConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    return value === relatedValue;
  }

  defaultMessage(args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    return `${relatedPropertyName} and ${args.property} don't match`;
  }
}

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Field()
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Match('password')
  @Field()
  confirm_password: string;

  @IsNotEmpty()
  @IsEmail()
  @Column({
    unique: true,
  })
  @Field()
  email: string;

  @IsOptional()
  role: Role;
}
