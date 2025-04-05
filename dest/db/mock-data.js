"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driversDb = void 0;
const driver_types_1 = require("../drivers/driver-types");
exports.driversDb = {
    drivers: [{
            id: 1,
            name: 'Ivan Rider',
            phoneNumber: '1234567890',
            email: 'ivanrider@email.com',
            status: driver_types_1.DriverStatus.OnOrder,
            vehicleMake: 'BMW',
            vehicleModel: 'Cabrio',
            vehicleYear: 2014,
            vehicleLicensePlate: 'R1232JKO',
            vehicleDescription: null,
            vehicleFeatures: [driver_types_1.VehicleFeature.ChildSeat, driver_types_1.VehicleFeature.PetFriendly],
            createdAt: new Date()
        },
        {
            id: 2,
            name: 'Dima Trader',
            phoneNumber: '9876543210',
            email: 'dimatrader@email.com',
            status: driver_types_1.DriverStatus.OnOrder,
            vehicleMake: 'BMW',
            vehicleModel: 'Cabrio',
            vehicleYear: 2018,
            vehicleLicensePlate: 'K5634BOT',
            vehicleDescription: null,
            vehicleFeatures: [],
            createdAt: new Date()
        }]
};
