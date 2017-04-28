export default class CoordinatesService {
    public calculate(baseCoordinates: any, decoratorCoordinates: any) {
        const coordinates = {
            gx: 0,
            gy: 0,
            lx: 0,
            ly: 0
        }
        coordinates.lx = decoratorCoordinates.lx
        coordinates.ly = decoratorCoordinates.ly
        coordinates.gx = baseCoordinates.gx + decoratorCoordinates.lx
        coordinates.gy = baseCoordinates.gy + decoratorCoordinates.ly
        return coordinates
    }
}
