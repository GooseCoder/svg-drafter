import { IDecoratorConfiguration } from './decorator-configuration.interface'
import { IDecorator } from './decorator.interface'
import NullConfiguration from './null-configuration'

export default class Shape {
    private baseConfig: IDecoratorConfiguration
    private decorators: Map<string, IDecorator>

    constructor() {
        this.baseConfig = new NullConfiguration()
        this.decorators = new Map()
    }

    public render() {
        return true
    }

    public addBaseConfig(config: IDecoratorConfiguration) {
        this.baseConfig = config
    }

    public getBaseConfig() {
        return this.baseConfig
    }

    public addDecorator(decorator: IDecorator) {
        const id = decorator.getId()
        return this.decorators.set(id, decorator)
    }

    public getDecorator(id: string) {
        return this.decorators.get(id)
    }

    public getDecorators(): Map<string, IDecorator> {
        console.log(this.decorators.size)
        return this.decorators
    }

    public removeDecorator(id: string) {
        return this.decorators.delete(id)
    }
}
