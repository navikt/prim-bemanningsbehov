FROM node:16.13.0
LABEL maintainer="PIM"

ADD . /prim-bemanningsbehov
WORKDIR /prim-bemanningsbehov

EXPOSE 3000

CMD ["yarn", "start"]
