FROM node:10

WORKDIR backend/

RUN pwd

COPY . .

RUN yarn install
RUN yarn build


EXPOSE 8080
CMD [ "yarn", "start:prod" ]
