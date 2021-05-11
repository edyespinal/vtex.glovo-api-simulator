FROM node:12-alpine

WORKDIR /usr
COPY package.json package-lock.json ./
RUN npm install
WORKDIR /usr/dist

# COPY . ./usr/back

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "npm", "start" ]
