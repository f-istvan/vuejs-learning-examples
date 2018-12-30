FROM ubuntu:18.04

RUN apt-get update && apt-get install -y \
	gnupg2 \
	curl

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -

RUN apt-get update && apt-get install -y \
    nodejs

RUN npm install -g json-server

RUN mkdir proto_rest_api_app
WORKDIR proto_rest_api_app
ADD db.json db.json

ENTRYPOINT json-server --watch db.json --host 0.0.0.0
CMD []



# docker build -t vue_backend_protoapp:latest .
# docker run -p 8000:3000 vue_backend_protoapp:latest
# curl http://localhost:8000/data.json
# docker kill $(docker ps -q)