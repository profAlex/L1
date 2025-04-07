"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverInputDtoValidation = void 0;
const driverInputDtoValidation = (data) => {
    const errors = [];
    if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2 || data.name.trim().length > 15) {
        errors.push({ field: 'name', message: 'Invalid name' });
    }
    // Аналогично добавляем проверки для других полей...
    return errors;
};
exports.driverInputDtoValidation = driverInputDtoValidation;
//--------------------------
const driverInputDtoValidation = (data) => {
    const errors = [];
    if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2 || data.name.trim().length > 15) {
        errors.push({ field: 'name', message: 'Invalid name' });
    }
    if (!data.phoneNumber || typeof data.phoneNumber !== 'string' || data.phoneNumber.trim().length < 8 || data.phoneNumber.trim().length > 15) {
        errors.push({ field: 'phoneNumber', message: 'Invalid phoneNumber' });
    }
    if (!data.email || typeof data.email !== 'string' || data.email.trim().length < 6 || data.email.trim().length > 50) {
        errors.push({ field: 'email', message: 'Invalid email' });
    }
    if (!data.vehicleMake || typeof data.vehicleMake !== 'string' || data.vehicleMake.trim().length < 2 || data.vehicleMake.trim().length > 30) {
        errors.push({ field: 'vehicleMake', message: 'Invalid vehicleMake' });
    }
    if (!data.vehicleModel || typeof data.vehicleModel !== 'string' || data.vehicleModel.trim().length < 2 || data.vehicleModel.trim().length > 30) {
        errors.push({ field: 'vehicleModel', message: 'Invalid vehicleModel' });
    }
    if (!data.vehicleYear || typeof data.vehicleYear !== 'number' || data.vehicleYear < 1970 || data.vehicleYear > 2024) {
        errors.push({ field: 'vehicleYear', message: 'Invalid vehicleYear' });
    }
    if (!data.vehicleLicensePlate || typeof data.vehicleLicensePlate !== 'string' || data.vehicleLicensePlate.trim().length < 2 || data.vehicleLicensePlate.trim().length > 30) {
        errors.push({ field: 'vehicleLicensePlate', message: 'Invalid vehicleLicensePlate' });
    }
    if (data.vehicleDescription !== null && ((typeof data.vehicleDescription !== 'string' ||
        data.vehicleDescription.trim().length < 10 ||
        data.vehicleDescription.trim().length > 200))) {
        errors.push({ field: 'vehicleDescription', message: 'Invalid vehicleDescription' });
    }
    if (!Array.isArray(data.vehicleFeatures)) {
        errors.push({ field: 'vehicleFeatures', message: 'Invalid vehicleFeatures' });
    }
    else if (data.vehicleFeatures.length) {
        return errors;
    }
    ;
    vehicleFeatures: VehicleFeature[];
};
exports.driverInputDtoValidation = driverInputDtoValidation;
