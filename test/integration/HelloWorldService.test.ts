import { HelloWorldService } from "../../src/HelloWorldService";
import { HelloWorldRestHandler } from "../../src/HelloWorldRestHandler";
import { LambdaModel, SsmClient, AwsConfig } from "@rezdy/ts-aws-utils";
import { RezdyUtils } from "@rezdy/ts-rezdy-utils";
import uuid = require("uuid");
import HelloWorldRepository from "../../src/repository/HelloWorldRepository";


describe('Integration tests of HelloWorld Service', () => {

    let lambdaHandler: HelloWorldRestHandler;

    beforeAll(async () => {
        //TODO if you need resolve SSM parameters
        //
        // const awsConfig = RezdyUtils.isLocalEnvironment() ? new AwsConfig('test') : new AwsConfig();
        //
        // const ssmClient = new SsmClient(awsConfig);
        //
        // const pBusinessLogin = ssmClient.getMandatoryParameter('/svc/test/svc-helloWorld/REZDY_BUSINESS_CLIENT_LOGIN', true);
        // const pBusinessPassword = ssmClient.getMandatoryParameter('/svc/test/svc-helloWorld/REZDY_BUSINESS_CLIENT_PASSWORD', true);
        // const pBusinessUrl = isLocalEnv ? 'http://dev.rezdy.com:8080/internal/' : ssmClient.getMandatoryParameter('/svc/test/REZDY_BUSINESS_CLIENT_URL', true);

        // const [businessLogin, businessPassword, businessUrl] = await Promise.all([pBusinessLogin, pBusinessPassword, pBusinessUrl]);
        //
        // const correlationId = uuid();
        //
        // const helloWorldRepository = new HelloWorldRepository(helloWorldTable, correlationId, awsConfig);
        // const helloWorldService = new HelloWorldService(correlationId, helloWorldRepository);
        // lambdaHandler = new HelloWorldRestHandler(config, helloWorldService, correlationId);
    });

    it("lambdaHandler get", async () => {

        // const mockedEvent = TODO
        // const response = await lambdaHandler.get(mockedEvent);
        //
        // expect(response.statusCode).toBe(200);
        // expect(response.body).toBeDefined();

    }, 30000);


});

