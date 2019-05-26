import HelloWorld from '../model/HelloWorld';
import { AwsConfig, DynamoDbClient } from '@rezdy/ts-aws-utils';

export default class HelloWorldRepository {

    private readonly client: DynamoDbClient;

    constructor(tableName: string, clientConfiguration?: AwsConfig) {
        this.client = new DynamoDbClient(tableName, clientConfiguration);
    }

    public async get(helloWorldId: string): Promise<HelloWorld> {
        //TODO
        throw new Error('NOT IMPLEMENTED YET');
    }
}