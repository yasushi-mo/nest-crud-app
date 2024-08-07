# Use the official Node.js image as the base image
FROM node:20-alpine3.19

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port your app runs on
EXPOSE 3001

# Define the command to run your app using npm
CMD ["npm", "run", "start:prod"]