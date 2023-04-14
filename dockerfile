FROM node:18
COPY . /app-node
RUN npm install
ENTRYPOINT npm run dev