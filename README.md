# ARK POC API

## About the project

A simple backend service for the Ark POC frontend project.

### Built with

- Typescript
- Express
- Prisma

## Getting started

To get a local copy up and running follow these simple example steps.

### Yarn

```bash
    npm install --global yarn
```

### Installation

1. Clone the repository

   ```bash
   git clone
   ```

2. Install the required packages

   ```bash
   yarn
   ```

3. Ensure you set your environment variables:

   ```bash
      PORT=8000
      DATABASE_URL=file:./db/dev.db
      JWT_SECRET="jwtsecret"
   ```

4. Run the database migrations

   ```bash
   npx prisma migrate dev
   ```

## Usage

Start the server locally:

```bash
yarn dev
```
