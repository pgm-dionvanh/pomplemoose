import { Role } from '../../users/entities/role.enum';

export interface JwtPayload {
  firstName: string;
  lastName: string;
  mail: string;
  role: Role;
  sub: number;
}
