FROM node:alpine
WORKDIR '/scootify/playlist/'

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "run", "server"]