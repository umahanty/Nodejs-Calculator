FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install express 

COPY . /app

EXPOSE 3000

CMD ["node", "app.js"]
