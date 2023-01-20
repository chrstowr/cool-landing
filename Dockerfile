# pull official base image
FROM --platform=linux/arm/v7 node:buster

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install
RUN npm install react-scripts

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]
