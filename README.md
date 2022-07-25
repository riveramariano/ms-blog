# Microservices Blog

## Functionality

This project is based on the creation of a simple blog, where the user can add posts and comments to them. It is created with a basic structure of microservices. It also contains a custom event bus built to understand how asynchronous microservices work.

### Microservices List
- Posts (in charge of creating and listing posts)
- Comments (in charge of creating and listing comments)
- Query (in charge of joining the posts and comments data)
- Moderation (in charge of approving, rejecting comments)

### Run Locally

- Clone the repository `https://github.com/riveramariano/ms-blog.git`
- Open a console for each microservice, ui and event bus and run `npm install` for the dependencies
- Open a console for each microservice, ui and event bus and run `npm start` to start them
