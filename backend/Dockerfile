# Build Stage
FROM node:20.11 as build

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./ .

EXPOSE 3333

# Command to run your application
CMD ["node", "app.js"]