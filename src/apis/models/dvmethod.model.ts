import { Schema, model } from 'mongoose';

import { IDVMethod } from '../types';

const DVMethodSchema = new Schema<IDVMethod>(
    {
        name: {
            type: String,
            required: true,
        },
        innerDistrictFee: {
            type: Number,
            default: 10000,
        },
        outerDistrictFee: {
            type: Number,
            default: 10000,
        },
        surChargeInner: {
            type: Number,
            default: 10000,
        },
        surChargeOuter: {
            type: Number,
            default: 10000,
        },
        feeChangeAddressDelivery: {
            type: Number,
            default: 10000,
        },
        feeStorageCharges: {
            type: Number,
            default: 10000,
        },
        feeReturn: {
            type: Number,
            default: 10000,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const DVMethod = model<IDVMethod>('dvmethods', DVMethodSchema);

export { DVMethod, DVMethodSchema };
