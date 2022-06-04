FROM node:slim
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
WORKDIR /app/frontend
RUN npm install
WORKDIR /app
EXPOSE 3000 3001
RUN npm run build:frontend
RUN npm run build
CMD npm run start:prod