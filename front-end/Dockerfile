# Use an official Node runtime as base image
FROM node:14

# Set the working directory
WORKDIR .

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files to the current directory
COPY . .

# Optional: build the application
RUN npm run build

# Optional: install the web server if the application does not use history mode
RUN npm install -g serve

# Optional: run the application
CMD [ "serve", "-s", "dist" ]