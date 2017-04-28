import {IDecoratorConfiguration} from './decorator-configuration.interface'

export default class SVGLoaderService {
    private paper: any
    constructor(paper: any) {
        this.paper = paper
    }

    public load(config: IDecoratorConfiguration) {
        return this.paper.image(
            config.src,
            config.coordinates.gx,
            config.coordinates.gy,
            config.size.width,
            config.size.height
        )
    }
}
