FROM node:21-alpine

WORKDIR /frontend

ENV HOSTLINK=http://sandbox_backend:3000

COPY ./package.json .

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["yarn", "dev", "--host", "0.0.0.0"]
