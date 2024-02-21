FROM node:20.11-alpine as build

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./ .

EXPOSE 1337

CMD ["node", "app.js"]