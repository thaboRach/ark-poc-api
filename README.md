# ARK POC API

## About the project

A simple backend service for the Ark POC frontend project.

### Built with

- Typescript
- Express
- Prisma

## Getting started

To get a local copy up and running follow these simple example steps.

- Clone the repository

  ```bash
   git clone https://github.com/thaboRach/ark-poc-api.git
  ```

- Ensure you create a `.env` file with the following environment variables

  ```bash
   POSTGRES_USER=arkpoc
   POSTGRES_PASSWORD=supersecret
   POSTGRES_DB=arkpoc
   DATABASE_URL=postgres://arkpoc:supersecret@localhost:5432/arkpoc
   NODE_ENV=development
  ```

### Docker (optional but recommended)

1. Start the container

   ```bash
      docker compose up
   ```

### Without Docker

Ensure you have [postgresql](https://www.postgresql.org/download/) installed on your machine.

#### Yarn

```bash
   npm install --global yarn
```

1. Install the required packages

   ```bash
      yarn
   ```

2. Run the database migrations (This will allow the database to sync with the schema)

   ```bash
      npx prisma migrate dev
   ```

## Usage

Start the server locally:

```bash
   yarn dev
```
