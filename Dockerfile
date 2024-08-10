FROM node:20.16.0-slim AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production

FROM nginx:latest

COPY --from=build app/dist/usense_test_task/browser /usr/share/nginx/html
COPY --from=build app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80