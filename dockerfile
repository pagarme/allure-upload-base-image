FROM node

ADD upload.js .
ADD package.json .

RUN npm install
