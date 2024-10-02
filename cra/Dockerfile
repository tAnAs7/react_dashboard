# Use the official Node.js 18 image as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
