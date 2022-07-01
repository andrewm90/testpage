FROM nginx
COPY ./avery2/ /usr/share/nginx/html/
EXPOSE 80:80
CMD ["nginx", "-g", "daemon off;"]