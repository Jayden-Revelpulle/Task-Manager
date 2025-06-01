import mongoose from 'mongoose';

const connectDB = async (url: string): Promise<typeof mongoose> => {
    // Encode the URL to handle special characters
    const encodedUrl: string = encodeURI(url);
    
    return mongoose.connect(encodedUrl);
};

export default connectDB; 