# Use the official Node.js image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the port on which the application will run
EXPOSE 3000

# Start the Node.js application
CMD [ "node", "app.js" ]
