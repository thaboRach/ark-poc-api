# ARK POC API

## About the project

A simple backend service for the Ark POC frontend project.

### Built with

- Typescript
- Express
- Prisma

## Prerequisites

- Node and NPM
- Yarn
- Docker & Kubernetes

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

## Local Kubernetes cluster

Ensure you have installed [Kind](https://kind.sigs.k8s.io/#installation-and-usage) on your machine.

1. Create the cluster:

   ```bash
      kind create cluster --config=./k8s/config.yaml
   ```

2. Use the cluster:

   ```bash
      kubectl cluster-info --context kind-ark-poc-cluster
   ```

3. Apply the deployment configuration:

   ```bash
      kubectl apply -f ./k8s/deployment.yaml
   ```

4. Check that the namespace has been created:

   ```bash
       kubectl get namespaces
   ```

5. Set the namespace as the active

   ```bash
      kubectl config set-context --current --namespace=backstage-ns
   ```

6. Show the contexts:

   ```bash
      kubectl config get-contexts
   ```

7. Check the status of your pods:

   ```bash
      kubectl get pods
   ```

- To stop and delete the cluster

  ```bash
      kind delete cluster --name ark-poc-cluster
  ```
