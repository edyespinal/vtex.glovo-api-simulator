FROM node:14

WORKDIR /usr/back

COPY . /usr/back

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# # Bundle app source
# COPY . .

EXPOSE 5000
CMD [ "npm", "run", "dev" ]