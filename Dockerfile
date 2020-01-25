FROM node:13.7.0-alpine

WORKDIR /app

ADD package*.json ./

RUN npm install

ADD . .

EXPOSE 3000

CMD ["node", "src/index.js"]