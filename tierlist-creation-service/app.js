import express from 'express';
import cors from 'cors';
import tierlistRoutes from './routes/tierlistRoutes.js';

const app = express();

// Middlewares
app.use(cors());  // Enables Cross-Origin Resource Sharing
app.use(express.json());  // Parses incoming JSON requests

// Routes
app.use('/api', tierlistRoutes);  // Mounts tier list routes under /api

export default app;
