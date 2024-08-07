## STEP BY STEP CREATE PROJECT
```bash
$ npm i -g @nestjs/cli

$ nest new microservices

$ nest g library common

$ nest g module database -p common

$ nest g module models -p common

$ nest g app projects

$ nest g app users

$ nest g app orders

$ nest g resource projects

$ nest g resource users

$ nest g resource orders
```

## Installation

```bash
$ npm install

Add .env file to apps/orders with variables:
+ HTTP_PORT=
+ TCP_PORT=
+ MONGODB_URI=

Add .env file to apps/projects with variables:
+ HTTP_PORT=
+ TCP_PORT=
+ MONGODB_URI=

Add .env file to apps/projects with variables:
+ HTTP_PORT=
+ TCP_PORT=
+ MONGODB_URI=
+ ORDERS_PORT=
+ ORDERS_HOST=

```

## Running the app

```bash
# development
update command to npm run start:dev on docker-compose.yaml file
$ docker-compose up

# production
update command to npm run start:prod, target to production on docker-compose.yaml file
$ docker-compose up

# for each services to debug
$ npm run start:dev <name_of_services>
```

