FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY run.sh .
COPY api.js .

EXPOSE 8081

CMD /app/run.sh
