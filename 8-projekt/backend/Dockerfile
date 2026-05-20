FROM node

WORKDIR /backend

COPY package.json .

RUN npm install

COPY api.js .

ENV MONGODB_USERNAME=admin
ENV MONGODB_PASSWORD=secret
ENV PORT=8080

EXPOSE ${PORT}

CMD [ "npm", "start" ]