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
