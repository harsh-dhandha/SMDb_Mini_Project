# Use an official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app for production (creates the "build" directory)
RUN npm run build

# Expose port 4000 (or any other port you want your app to run on)
EXPOSE 3000

# Command to run the Express server
CMD [ "node", "server.js" ]
