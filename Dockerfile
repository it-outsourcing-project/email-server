FROM node:21

WORKDIR /usr/src/email-server

COPY . .

RUN npm install

RUN npm run build

RUN rm -rf ./src

EXPOSE 4000

CMD ["npm", "run", "prod"]