FROM node:18-alpine  as builder

WORKDIR /app

COPY package*.json /app/

RUN mkdir -p /app/node_modules

RUN chown node:node /app/node_modules

RUN npm install

COPY . . 

ENV NEXT_PUBLIC_ENVIRONMENT='development'

ENV NEXT_PUBLIC_BASE_URL='http://localhost:5001/api'

EXPOSE 3000

CMD ["npm", "run", "dev"]
