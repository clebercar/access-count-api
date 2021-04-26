FROM node:14.15.4-alpine AS build

WORKDIR /app

COPY .git .git

COPY package*.json ./

# Install certificates
RUN apk add --no-cache ca-certificates

# Build tools and source code
RUN npm install

COPY . .

RUN npm run build

FROM node:14.15.4-alpine

WORKDIR /app

# Runtime dependencies
COPY --from=build /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=build /app/package*.json ./
RUN npm install --only=production

# Runtime
COPY --from=build /app/confd ./confd
COPY --from=build /app/entrypoint.sh ./
COPY --from=build /app/.git ./.git
COPY --from=build /app/dist ./dist
COPY --from=build /app/ormconfig.js ./ormconfig.js

ADD https://github.com/kelseyhightower/confd/releases/download/v0.16.0/confd-0.16.0-linux-amd64 /usr/local/bin/confd
RUN chmod +x /usr/local/bin/confd

ENTRYPOINT ["./entrypoint.sh"]

CMD ["npm", "run", "start"]
