# currency-api

NodeJS API for currency conversion.

## Endpoints

### GET /currencies
Returns a list of available currencies.

Response:

200 (OK)

```json
["AED", "AFN", "ALL"]
```
### POST /currencies/convert
Converts the provided value to the desired currency.

Request:
```json
{
  "from": "EUR",
  "to": "YEN",
  "value": 5
}
```

Response:
200 (OK)

```json
{
  "convertedValue": 492.93
}
```

500 (Internal Server Error)

400 (Bad Request)

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
