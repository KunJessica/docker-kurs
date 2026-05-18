ARG NODE_VERSION=latest

FROM node:${NODE_VERSION}

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

ENV PORT=3000

# VOLUME ["/app/storage"] = Anonymes Volume KEIN Named Volume

EXPOSE ${Port}

CMD ["npm", "start"]