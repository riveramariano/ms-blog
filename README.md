# Microservices Blog

**_Notes: You need to have docker, docker kubernetes installed._**

## Functionality

This project is based on the creation of a simple blog, where the user can add posts and comments to them. It is created with a basic structure of microservices. It also contains a custom event bus built to understand how asynchronous microservices work.

### Microservices List

- Comments (in charge of creating and listing comments)
- Event Bus (in charge of asynchronous communication between microservices)
- Moderation (in charge of approving, rejecting comments)
- Posts (in charge of creating and listing posts)
- Query (in charge of joining the posts and comments data)

### Run Locally

- Clone the repository `https://github.com/riveramariano/ms-blog.git`
- Download Ingress-NGinx:
  - Refer to `https://kubernetes.github.io/ingress-nginx/deploy/#docker-desktop`
  - After the installation run `kubectl get ns` to confirm it
- Download Skkafold:
  - Refer to `https://skaffold.dev/docs/install/`
- Open a console for each microservice and the ui folder:
  - Run `npm install` for the dependencies
  - Inside each console run `docker build -t your-docker-id/microservice-name .` to create an image
- Run `docker push your-docker-id/microservice-image` for each image you created to push them to Docker Hub
- Go to each `.yaml` file inside `./infra/k8s/` and change all `riveramariano` references to `your-docker-id`
- Open a console inside the root folder and run `skaffold dev`, this will run all the deployment config files
  - If the first time fail, shut it down a re-run it
- In a File Explorer go to `C:\Windows\System32\drivers\etc`:
  - Add `127.0.0.1 posts.com` on the last line of your `hosts` file
- Open a web browser and go to `posts.com`, the react app should be running
