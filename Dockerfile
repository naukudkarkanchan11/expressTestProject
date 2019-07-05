# Use an official node runtime as a parent image
FROM node-8.12.0:alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages 
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NAME prod

# Run app.js when the container launches
CMD ["npm", "start"]