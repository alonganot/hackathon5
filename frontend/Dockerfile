# Use an official Node runtime as a parent image
FROM node:20.11-alpine AS build
# Set the working directory
WORKDIR /app
# Copy the package.json and package-lock.json files
COPY package.json .
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application
COPY . .
# Build the React app
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:latest as prod
# Copy the build files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html
# Copy nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
# Expose port 8080 to the outside world
EXPOSE 8080
# Command to run the web server
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]