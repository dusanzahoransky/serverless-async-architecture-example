const path = require('path');
const template = require('serverless-fragments');

let serverlessYaml = template.load(path.join(__dirname, 'serverless/serverless.core.yml'));

module.exports = serverlessYaml;