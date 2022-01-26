# hapi-rest-test

For Hapi testing purposes. Availability RESP API response generator. Node 14.x

## Usage

### Start a Server
Log is sent into the standard output.
```shell
npm i
node src/index.js
```

### Benchmarking

```shell
npx autocannon -c 100 -d 5 -p 10 http://localhost:5555
```
