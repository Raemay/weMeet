FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app
COPY . ./
RUN npm i
COPY . .
EXPOSE 5050
CMD [ "npm", "run", "dev" ]