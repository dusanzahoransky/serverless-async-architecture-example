import { RezdyUtils } from '@rezdy/ts-rezdy-utils';
import { LambdaError, LambdaModel, LambdaResponse, LambdaStatusCode, ToResponse } from '@rezdy/ts-aws-utils';
import { APIGatewayEvent, APIGatewayProxyResult, Callback, Context, Handler } from 'aws-lambda';
import HelloWorldRepository from './repository/HelloWorldRepository';
import { HelloWorldService } from './service/HelloWorldService';

export class HelloWorldRestHandler {

    private helloWorldService: HelloWorldService;

    constructor(helloWorldService: HelloWorldService, correlationId: string) {
        this.helloWorldService = helloWorldService;
    }

    @ToResponse()
    async get(event: APIGatewayEvent, context: Context, callback: Callback<APIGatewayProxyResult>) {
        const helloWorldId = event.pathParameters.helloWorldId;
        return await this.helloWorldService.get(helloWorldId);
    }
}

//TODO event APIGatewayEvent, SQSEvent, etc.
export const get: Handler = async (event: APIGatewayEvent, context: Context, callback: Callback<APIGatewayProxyResult>) => {

    const helloWorldRepository = new HelloWorldRepository(process.env.SVC_HELLOWORLD_HELLOWORLD_TABLE);
    const helloWorldService = new HelloWorldService(helloWorldRepository);
    const correlationId = '123';//e.g. uuid(), event.Records[0].messageId

    return await new HelloWorldRestHandler(helloWorldService, correlationId).get(event, context, callback);
};
