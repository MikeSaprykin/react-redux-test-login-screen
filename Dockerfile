FROM node:8-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

ADD ./build /usr/src/app/build
COPY server.ts /usr/src/app/

EXPOSE 8080
CMD [ "npm", "run", "node-server" ]
