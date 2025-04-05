import {Driver, DriverStatus, VehicleFeature} from "../drivers/driver-types";

export const driversDb = {
    drivers: <Driver[]>[{
    id: 1,
    name: 'Ivan Rider',
    phoneNumber: '1234567890',
    email: 'ivanrider@email.com',
    status: DriverStatus.OnOrder,
    vehicleMake: 'BMW',
    vehicleModel: 'Cabrio',
    vehicleYear: 2014,
    vehicleLicensePlate: 'R1232JKO',
    vehicleDescription: null,
    vehicleFeatures: [VehicleFeature.ChildSeat, VehicleFeature.PetFriendly],
    createdAt: new Date()
},
{
    id: 2,
    name: 'Dima Trader',
    phoneNumber: '9876543210',
    email: 'dimatrader@email.com',
    status: DriverStatus.OnOrder,
    vehicleMake: 'BMW',
    vehicleModel: 'Cabrio',
    vehicleYear: 2018,
    vehicleLicensePlate: 'K5634BOT',
    vehicleDescription: null,
    vehicleFeatures: [],
    createdAt: new Date()
}]};