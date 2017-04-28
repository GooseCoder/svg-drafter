export interface IDecoratorConfiguration {
    coordinates: {
        lx: number
        ly: number
        gx: number
        gy: number
    }
    size: {
        width: number
        height: number
    }
    src: string
    type: string
    attr: any
}
