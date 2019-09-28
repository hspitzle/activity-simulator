FROM node:10.16-jessie
LABEL Name=activity-simulator Version=master

ENV HOME=/home/app
WORKDIR $HOME

ADD package.json package-lock.json $HOME/
RUN npm install

CMD tail -f /dev/null
