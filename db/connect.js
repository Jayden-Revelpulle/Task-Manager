const mongoose = require('mongoose')

const connectDB = (url) => {
    // Encode the URL to handle special characters
    const encodedUrl = encodeURI(url)
    
    return mongoose.connect(encodedUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        writeConcern: {
            w: 'majority',
            wtimeout: 2500
        }
    })
}

module.exports = connectDB
    