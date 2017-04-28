import * as uuid from 'uuid'
import {IDecoratorConfiguration} from './decorator-configuration.interface'
import {IDecorator} from './decorator.interface'
/**
 * Created by gustav on 4/21/17.
 */

export default class NullDecorator implements IDecorator {
    private id: string
    private type: string

    constructor() {
        this.id = uuid.v1()
        this.type = 'null'
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
