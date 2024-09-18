import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors'
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors())
// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1); // Exit the process if there's an error
    }
};

// Connect to MongoDB
app.use('/api/users', userRoutes);

// Start the server

// PORT = 9001
// MONGO_URI = mongodb+srv://nnm22ad051:4YFnopxj35dMffRp@cricket.472ze.mongodb.net/?retryWrites=true&w=majority&appName=cricket
app.listen(process.env.PORT , () => {
    connectDB();
    console.log(`Server running on port ${process.env.PORT || 3000}`);

}).on('error', (err) => {
    console.error(`Error: ${err.message}`);
});
