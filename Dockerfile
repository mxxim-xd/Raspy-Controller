# Use Node.js 20 as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to install dependencies first
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Install wakeonlan and ping (iputils-ping)
RUN apt-get update && \
    apt-get install -y wakeonlan iputils-ping && \
    rm -rf /var/lib/apt/lists/*

# Copy the rest of the application code into the container
COPY . .

# Compile the TypeScript code to JavaScript (if you're using TypeScript)
RUN yarn tsc

# Expose the application port (3000 by default)
EXPOSE 3000

# Start the application
CMD ["node", "dist/server.js"]
