FROM node:alpine
WORKDIR '/scootify/playlist/'

COPY . .

RUN npm install

EXPOSE 3002

CMD ["npm", "run", "server"]