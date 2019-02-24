FROM node:alpine
WORKDIR '/scootify'

COPY server server
COPY public public
COPY .babelrc .
COPY package-lock.json .
COPY package.json .

RUN npm install --only=prod

EXPOSE 3000

CMD ["npm", "start"]