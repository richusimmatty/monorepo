# Builder Stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Build the application
RUN npx nx build app-one

# Production Stage
FROM nginx:alpine

COPY --from=builder /app/dist/apps/app-one /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
