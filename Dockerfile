FROM node:18.17


WORKDIR /usr/src/app




COPY package*.json ./


RUN npm install


COPY . .


EXPOSE 3000

CMD ["npm", "run", "dev"]