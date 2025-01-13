FROM node:20
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm i -g @angular/cli
COPY ./ ./
EXPOSE 4200
CMD ["ng", "serve"]

