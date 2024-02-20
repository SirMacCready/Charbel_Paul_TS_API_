# Build Stage
FROM node:20.11-alpine as build

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./ .

EXPOSE 1337

# Command to run your application
CMD ["node", "app.js"]