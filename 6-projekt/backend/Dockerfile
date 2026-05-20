FROM node

WORKDIR /backend

COPY package.json .

RUN npm install

COPY api.js .

EXPOSE 8080

CMD ["npm", "start"]