FROM node:10

WORKDIR frontend/

RUN pwd

COPY . .

RUN yarn install
RUN yarn run build


CMD yarn serve -s build -l 3000

expose 3000