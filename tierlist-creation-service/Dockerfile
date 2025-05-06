# Use official Node.js base image
FROM node:18-alpine

# Create working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose backend port
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
