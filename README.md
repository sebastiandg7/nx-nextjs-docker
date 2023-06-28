# Nx + Next.js + Docker

This repository contains the code implementation of the steps described in the blog posts titled:

- [Nx + NextJS + Docker - The Nx way: Creating the NextJS application](https://dev.to/sebastiandg7/nx-nextjs-docker-the-nx-way-creating-the-nextjs-application-1efl).
- [Nx + NextJS + Docker - The Nx way: Containerizing our application](https://dev.to/sebastiandg7/nx-nextjs-docker-the-nx-way-containerizing-our-application-1mi7)

## Overview

The blog post provides a detailed guide on setting up a Next.js application using Nx and Docker, following best practices and leveraging the capabilities of the Nx workspace.

The repository contains all the necessary code and configuration files to follow along with the steps outlined in the blog post.

## Prerequisites

To successfully run the Next.js application and Dockerize it, ensure that you have the following dependencies installed on your system:

- Docker (version 23)
- Node.js (version 18)
- pnpm (version 8)

You can alternatively use [Volta](https://volta.sh/) to setup the right tooling for this project.

## Getting Started

To get started, follow the steps below:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/sebastiandg7/nx-nextjs-docker.git
   ```

2. Install the project dependencies:

   ```bash
   pnpm install
   ```

3. Refer to the blog post for detailed instructions on how creating the Next.js application, setting up workspace libraries, and configuring the custom server build was done.

4. Once you have completed the steps and tested your application locally, you can follow the blog post for further instructions on how building the application for production and Dockerizing it efficiently was configured.

## Building the application

To build the NextJS application, run:

```bash
pnpm exec nx build my-app
```

You will find the build output in the `dist/apps/my-app` directory.

To run the production build, run:

```bash
cd dist/apps/my-app
node server/main.js # Using the custom server
npm start # Using the NextJS built-in server
```

## Containerizing the application

To build the NexJS application container, run:

```bash
pnpm exec nx container my-app
```

This will create a local image tagged as `my-app:latest`.

## Running the application contianer

Once the container image is built, you can start the container by running:

```bash
docker run -p 3000:3000 -t my-app:latest
```

Visit http://localhost:3000 to see the application running

![Nx + NextJs application running from a container](https://github.com/sebastiandg7/nx-nextjs-docker/assets/13395979/7c2ef304-5168-4058-a950-4664f81fc05a)

Or call the API endpoint:

```bash
➜ curl http://localhost:3000/api/hello
Hello, from API!
```

## Additional Information

For additional information and in-depth explanations of the steps involved, please refer to the blog posst:

- [Nx + NextJS + Docker - The Nx way: Creating the NextJS application](https://dev.to/sebastiandg7/nx-nextjs-docker-the-nx-way-creating-the-nextjs-application-1efl).
- [Nx + NextJS + Docker - The Nx way: Containerizing our application](https://dev.to/sebastiandg7/nx-nextjs-docker-the-nx-way-containerizing-our-application-1mi7)

## License

This project is licensed under the [MIT License](LICENSE).
