import { Resolver } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { Location } from './entities/location.entity';

@Resolver(() => Location)
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}
}
