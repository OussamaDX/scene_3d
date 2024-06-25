FROM 20.13.1

WORKDIR /app

COPY package.json package-lock.json ./

RUN nvm install 

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm","start"]