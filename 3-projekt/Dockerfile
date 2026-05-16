FROM node

WORKDIR /app

COPY . /app

# sorgt dafür, dass vor Start des Containers der Befehl ausgeführt wird
RUN npm install 

# Port, auf den der Container hören soll - Dokumentationszweck
EXPOSE 3000

# COMMAND: instruction für Docker, die ausgeführt werden muss, wenn der Container startet
CMD ["node", "server.js"]