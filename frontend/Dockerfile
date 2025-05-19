## frontend/Dockerfile

# Base Image for Building
FROM node:20-alpine as builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install
RUN npm i framer-motion@^10

# Copy application code
COPY . .

# Build for production
RUN npm run build

# Final Image for Serving
FROM nginx:stable-alpine

# Add at the top of the final stage
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Install curl for health checks
RUN apk add --no-cache curl bash nano vim net-tools iputils htop

# Copy built frontend files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY ./nginx/nginx.${NODE_ENV}.conf /etc/nginx/nginx.conf

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
    CMD curl -f http://localhost || exit 1

# Expose port
EXPOSE 80