# pull official base image
FROM node:latest

# set working directory
WORKDIR /towrproject-web

# add `/app/node_modules/.bin` to $PATH
ENV PATH /towrproject-web/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install
RUN npm install react-scripts

# add app
COPY . ./

# start app
CMD ["npm", "start"]
