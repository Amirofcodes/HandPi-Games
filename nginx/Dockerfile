## nginx/Dockerfile

FROM nginx:stable-alpine

# Install curl for health checks
RUN apk add --no-cache curl bash nano vim net-tools iputils htop

# Copy nginx configuration
COPY nginx.prod.conf /etc/nginx/nginx.conf

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
    CMD curl -f http://localhost/healthz || exit 1