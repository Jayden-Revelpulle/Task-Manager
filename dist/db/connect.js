"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async (url) => {
    // Encode the URL to handle special characters
    const encodedUrl = encodeURI(url);
    return mongoose_1.default.connect(encodedUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        writeConcern: {
            w: 'majority',
            wtimeout: 2500
        }
    });
};
exports.default = connectDB;
//# sourceMappingURL=connect.js.map