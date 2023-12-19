FROM node:latest
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN git clone https://github.com/hipposen/nodejs-web-docker .
RUN npm install
EXPOSE 80
CMD [ "npm", "start"]
