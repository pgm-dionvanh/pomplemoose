import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async getLocationInfo(locationId: number) {
    const existingLoc = await this.locationRepository.findOne({
      where: {
        id: locationId,
      },
      relations: ['user'],
    });
    if (!existingLoc) {
      throw new BadRequestException({
        code: 400,
        message: 'Location not found',
      });
    }
    return existingLoc;
  }

  async getLocationsByUserID(userId: number): Promise<Location[]> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new BadRequestException({
        code: 400,
        message: 'User not found',
      });
    }

    const locations = await this.locationRepository.find({
      where: {
        user: user.location,
      },
      relations: ['user'],
    });

    return locations;
  }
}
