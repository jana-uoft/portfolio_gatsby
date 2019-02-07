FROM node:10-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache git && \
    npm install --global gatsby-cli && \
    npm install -g @sanity/cli