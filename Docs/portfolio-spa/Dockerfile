# docs/portfolio-spa/Dockerfile
# 1. Build step
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY src src
COPY index.html .
COPY vite.config.js .
RUN npm run build

# 2. Serve with Nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Copy a minimal custom nginx.conf if needed (optional - default is fine)
# COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 