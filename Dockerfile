FROM node:14.15

RUN mkdir /usr/src/app
WORKDIR /usr/src/app/react-numer

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY .  /usr/src/app/react-numer
RUN npm install


EXPOSE 3000

CMD [ "npm", "start" ]