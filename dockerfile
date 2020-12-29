FROM node:current-buster-slim

COPY upload.js .
COPY package.json .

RUN npm install

ENTRYPOINT [ "node", "upload.js" ]
