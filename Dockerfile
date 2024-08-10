FROM node:20.16.0-slim AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production
CMD npm run serve:ssr:usense_test_task

EXPOSE 4000