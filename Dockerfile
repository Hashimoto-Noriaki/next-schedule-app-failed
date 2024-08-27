FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm prune --production

FROM node:20-alpine

WORKDIR /app

COPY --from=0 /app ./

CMD ["npm", "run", "start"]

EXPOSE 3000
