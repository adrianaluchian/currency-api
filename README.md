# currency-api

NodeJS API for currency conversion.

## npm scripts

`lint`: runs linting rules

`test`: runs all tests found in the 'src' folder

`start`: run server locally

## Running the website in a Docker container

`docker build . -api`

`docker run -p -d 8001:3000 api`

The API will be accessible at http://localhost:8001

To stop the container:
`docker stop api`
