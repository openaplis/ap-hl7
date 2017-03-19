FROM sidharder/ap-hl7-ventana:latest

# Bundle app source
COPY . /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm run build-views

EXPOSE 50051
CMD [ "npm", "start" ]
