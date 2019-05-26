import HelloWorldRepository from '../repository/HelloWorldRepository';
import HelloWorld from '../model/HelloWorld';
import { RezdyLogger } from "@rezdy/ts-rezdy-logger/dist/src";

export default class HelloWorldService {

    private helloWorldRepository: HelloWorldRepository;
    private readonly logger: RezdyLogger;

    constructor(correlationId: string, helloWorldRepository: HelloWorldRepository) {
        this.logger = new RezdyLogger(this, correlationId);
        this.helloWorldRepository = helloWorldRepository;
    }

    async get(helloWorldId: string): Promise<HelloWorld> {
        return await this.helloWorldRepository.get(helloWorldId);
    }

}