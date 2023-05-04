# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose the port your application listens on (replace 3000 with your port if different)
EXPOSE 3000

# Start the application
CMD [ "node", "app.js" ]

# 