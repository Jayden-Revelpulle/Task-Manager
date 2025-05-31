import mongoose from 'mongoose';

const connectDB = async (url: string): Promise<typeof mongoose> => {
    // Encode the URL to handle special characters
    const encodedUrl: string = encodeURI(url);
    
    return mongoose.connect(encodedUrl, {
        writeConcern: {
            w: 'majority',
            wtimeoutMS: 2500
        }
    });
};

export default connectDB; 