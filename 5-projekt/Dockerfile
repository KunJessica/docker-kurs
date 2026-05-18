FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY server.js .

EXPOSE 3000

CMD ["node", "server.js"]

#docker run --rm --name cart --network shopping -d -p 3000:3000 api