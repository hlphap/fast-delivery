import mongoose from "mongoose";
import { ICMStore } from "../../interfaces";

const Schema = mongoose.Schema;

const CommissionStore = new Schema({
    name: {
        type: String,
        required: true,
    },
    orderPerMonthMin: {
        type: Number,
        default: 0
    },
    orderPerMonthMax: {
        type: Number,
        default: 0,
    },
    ratioCommission: {
        type: Number,
        default: 3,
    },
    image: {
        type: String,
        default: "None",
    },
    note: {
        type: String,
        default: "Note Commission Store"
    }
},
{
    timestamps: true,
    versionKey: false,
})

export default mongoose.model<ICMStore>("cmstores", CommissionStore);