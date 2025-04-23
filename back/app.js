import express from 'express';
import cors from 'cors';
import tierlistRoutes from './routes/tierlistRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', tierlistRoutes);

export default app;
