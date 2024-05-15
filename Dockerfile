FROM node:18-alpine  as builder

WORKDIR /app

COPY package*.json /app/

RUN mkdir -p /app/node_modules

RUN chown node:node /app/node_modules

RUN npm install

COPY . . 

ENV SENDGRID_API_KEY='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'

EXPOSE 3000

CMD ["npm", "run", "start"]
