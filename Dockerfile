FROM dockerhub.timeweb.cloud/node:18.17.1-alpine as build
WORKDIR /app
COPY . .
RUN yarn 
RUN yarn build 

FROM dockerhub.timeweb.cloud/nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
