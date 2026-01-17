FROM node:latest

WORKDIR /home

COPY . .

EXPOSE 3000/tcp

CMD node index.js
