const path = require('path');
const template = require('reusable-serverless-template');

let serverlessYaml = template.load(path.join(__dirname, 'serverless/serverless.core.yml'));

module.exports = serverlessYaml;