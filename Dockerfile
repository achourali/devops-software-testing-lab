FROM node:slim
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
WORKDIR /app/frontend
RUN npm install
WORKDIR /app
EXPOSE 3000 3001
CMD npm run build:frontend && npm run start