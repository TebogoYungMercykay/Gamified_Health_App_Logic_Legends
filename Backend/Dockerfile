FROM alpine

ENV NODE_ENV=production

RUN apk update && apk upgrade && apk add nodejs npm

WORKDIR /app

COPY . /app

CMD [ "node", "index.js" ]