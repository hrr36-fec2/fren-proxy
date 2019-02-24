FROM node:alpine
WORKDIR '/scootify/recommends'

COPY package.json .

RUN npm install

COPY . .


EXPOSE 3003
CMD ["npm", "start"]