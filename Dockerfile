FROM node:10.16-jessie
LABEL Name=activity-simulator Version=master

ENV HOME=/home/app
WORKDIR $HOME

ADD tsconfig.json package.json package-lock.json $HOME/
RUN npm install

ADD src $HOME/src/
RUN npm run build

ADD example $HOME/example/

CMD tail -f /dev/null
