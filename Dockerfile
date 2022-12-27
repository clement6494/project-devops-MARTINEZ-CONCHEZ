FROM node:12

WORKDIR /userapi
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
