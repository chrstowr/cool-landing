# are running the same version of Node.
FROM node:latest as builder
WORKDIR /towrproject-web
COPY package.json .
COPY yarn.lock .
RUN npm install
COPY . .
RUN npm run build


FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /towrproject-web/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

