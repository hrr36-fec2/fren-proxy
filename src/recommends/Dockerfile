FROM node:alpine
WORKDIR '/scootify/recommends'

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3003
CMD ["npm", "run", "start"]