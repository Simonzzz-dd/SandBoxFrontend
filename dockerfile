FROM node:21-alpine

WORKDIR /frontend

ENV HOSTLINK=https://localhost:3500

COPY ./package.json .

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["yarn", "dev"]
