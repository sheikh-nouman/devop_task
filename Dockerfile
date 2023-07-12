# Stage 1: ARM-based builder image
FROM --platform=linux/arm64 docker.io/arm64v8/ubuntu:latest AS builder

# Set up environment variables
ENV NODE_VERSION=14

# Install system dependencies
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash - && \
    apt-get install -y nodejs

# Set up the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the binary and JavaScript files to the working directory
COPY binary /app/binary
COPY server.js /app/server.js
COPY colorization-client /app/colorization-client

# Build your application, if needed

# Stage 2: Final image
FROM ubuntu:latest

# Copy the built artifacts from the builder stage
COPY --from=builder /app /app

# Set up the working directory
WORKDIR /app

# Set up entrypoint script and make it executable, if needed
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Set up the command to execute the entrypoint script, if needed
ENTRYPOINT ["/app/entrypoint.sh"]