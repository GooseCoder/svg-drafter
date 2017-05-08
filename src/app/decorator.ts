import * as uuid from 'uuid'
import CoordinatesService from './coordinates.service';
import {IDecoratorConfiguration} from './decorator-configuration.interface'
import {IDecorator} from './decorator.interface'

/**
 * Created by gustav on 4/21/17.
 */

export default class Decorator implements IDecorator {
    private id: string
    private type: string
    private _config: IDecoratorConfiguration

    constructor(
        baseConfig: IDecoratorConfiguration,
        decoratorConfig: IDecoratorConfiguration,
        coordinatesService: CoordinatesService) {
        this.id = uuid.v1()
        this.type = decoratorConfig.type
        decoratorConfig.coordinates = coordinatesService.calculate(
            baseConfig.coordinates,
            decoratorConfig.coordinates
        )
        this._config = decoratorConfig
    }

    get config() {
        return this._config
    }

    set config(config) {
        this._config = config
    }

    public getId() {
        return this.id
    }

    public getType() {
        return this.type
    }

    public render() {
        return true
    }
}
