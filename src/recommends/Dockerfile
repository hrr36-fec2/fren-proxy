FROM node:alpine
WORKDIR '/scootify/recommends'

COPY . .
RUN npm install

EXPOSE 3003
CMD ["npm", "start"]