FROM node

WORKDIR /shoppingApp

COPY . .

RUN npm install 
RUN npm install nodemon

EXPOSE 7080
CMD [ "npm","start" ]