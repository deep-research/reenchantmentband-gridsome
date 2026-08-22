FROM node:14-alpine

RUN apk add --no-cache python3 make g++ build-base && \
    ln -sf python3 /usr/bin/python

ENV PYTHON=/usr/bin/python3

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 1337