import mongoose from 'mongoose';

const connectDB = async (url: string): Promise<typeof mongoose> => {
    // Encode the URL to handle special characters
    const encodedUrl: string = encodeURI(url);
    
    return mongoose.connect(encodedUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        writeConcern: {
            w: 'majority',
            wtimeout: 2500
        }
    });
};

export default connectDB; 