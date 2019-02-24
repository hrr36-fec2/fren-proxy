FROM node:alpine
WORKDIR '/scootify/playback/'

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "server-dev"]