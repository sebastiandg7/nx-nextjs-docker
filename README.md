# Nx + Next.js + Docker Repository

This repository contains the code implementation of the steps described in the blog post titled "[Nx + Next.js + Docker: The Nx Way - Creating the Next.js Application](https://dev.to/sebastiandg7/nx-nextjs-docker-the-nx-way-creating-the-nextjs-application-1efl)".

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

## Additional Information

For additional information and in-depth explanations of the steps involved, please refer to the blog post: "[Nx + Next.js + Docker: The Nx Way - Creating the Next.js Application](https://dev.to/sebastiandg7/nx-nextjs-docker-the-nx-way-creating-the-nextjs-application-1efl)".

## License

This project is licensed under the [MIT License](LICENSE).
