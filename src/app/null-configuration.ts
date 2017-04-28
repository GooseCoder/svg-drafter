import {IDecoratorConfiguration} from './decorator-configuration.interface'

export default class NullConfiguration implements IDecoratorConfiguration {
    private _coordinates: any
    private _size: any
    private _attr: any
    private _type: string
    private _src: string

    constructor() {
        this._coordinates = {
            gx: 0,
            gy: 0,
            lx: 0,
            ly: 0
        }

        this._size = {
            height: 50,
            width: 50
        }

        this._attr = {
            fill: 'blue',
            stroke: 'black',
            strokeWidth: 10
        }

        this._type = 'null'
        this._src = ''
    }

    set coordinates(coordinates) {
        this._coordinates = coordinates
    }

    get coordinates(): { gx: number, gy: number, lx: number, ly: number } {
        return this._coordinates
    }

    set attr(attr) {
        this._attr = attr
    }

    get attr(): Object {
        return this._attr
    }

    set size(size) {
        this._size = size
    }

    get size(): { width: number, height: number } {
        return this._size
    }

    set type(type) {
        this._type = type
    }

    get type(): string {
        return this._type
    }

    set src(src) {
        this._src = src
    }

    get src(): string {
        return this._src
    }
}
