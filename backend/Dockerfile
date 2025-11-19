FROM node:20-slim

WORKDIR /usr/src/app

RUN apt-get update -y && apt-get install -y --no-install-recommends \
build-essential python3 sqlite3 ca-certificates \
&& rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci --only=production


COPY . .

RUN mkdir -p /app/data

EXPOSE 3000

USER node

CMD ["npm", "start"]
