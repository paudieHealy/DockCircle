FROM circleci/node:8.9.3-stretch

USER root

RUN apt-get update && apt-get install nginx

RUN git clone https://github.com/CircleCI-Public/circleci-dockerfiles/root/circle-dockerfiles
