# Super-Blog Backend

This is the backend part of the Super-Blog app. The frontend part is located here: [superblog-frontend](https://github.com/GeorGius11/superblog-frontend). Swagger documentation is available at `<application-domain>/api`.

## Table of Contents

- [Description](#description)
- [Project Setup](#project-setup)
- [Compile and Run the Project](#compile-and-run-the-project)
- [Configure .env File](#configure-env-file)
- [Seeding the Database](#seeding-the-database)

## Description

This repository contains the backend services for the Super-Blog app, including API routes, data models, and MongoDB configurations.

## Project setup

```bash
$ npm install
```

## Compile and run the project

Use the following commands to run the project:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Configure .env File

To set up the MongoDB connection, configure the .env file with your MongoDB connection URL:

```bash
MONGODB_URL=<your_connection_url>
```

## Seeding the Database

To seed the database with initial data, run:

```bash
$ npm run seed
```

