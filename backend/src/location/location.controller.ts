import { Controller, Get, Param } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  /* Todo jwt guard */
  @Get(':locationId')
  getLocationInfo(@Param('locationId') locationId: number) {
    return this.locationService.getLocationInfo(locationId);
  }

  /* Todo jwt guard */
  @Get('user/:userId')
  getLocationByUserId(@Param('userId') userId: number) {
    return this.locationService.getLocationsByUserID(userId);
  }
}
