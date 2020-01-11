FROM node:10.11.0
COPY package.json package.json
WORKDIR /usr/src/matrixcx-dashboard
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3005
CMD [ "node", "server.js" ]
