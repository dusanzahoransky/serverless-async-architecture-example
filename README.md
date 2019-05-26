# Typescript Serverless Template Project

## Config Files

Config files specific to your project are stored inside `config` folder

Passwords / Secret Keys need to come from ssm i.e `${ssm:/project/prod/BUSINESS_LOGIN}`


## Install

```
npm i
```

## Build

```
npm run build
```

Create serverless production deployment package locally. Use it just to preview the package locally use Jenkins to deploy the microservice.  
```
npm run sls-package
```

## Test

```
npm test
```

Unit tests
```
npm run test-unit
```

Integration tests
```
npm run test-integration
```