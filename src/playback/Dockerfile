FROM node:alpine
WORKDIR '/scootify/playback/'

COPY . .

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "server-dev"]