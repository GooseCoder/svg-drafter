import { expect } from 'chai'
import CoordinatesService from './coordinates.service'
import Decorator from './decorator'
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('Decorator', () => {
    let decorator: Decorator

    beforeEach(() => {
        decorator = new Decorator(
            {
                attr: {},
                coordinates: {
                    gx: 10,
                    gy: 10,
                    lx: 0,
                    ly: 0
                },
                size: {
                    height: 30,
                    width: 30
                },
                src: '',
                type: 'base'
            },
            {
                attr: {},
                coordinates: {
                    gx: 0,
                    gy: 0,
                    lx: 30,
                    ly: 40
                },
                size: {
                    height: 30,
                    width: 30
                },
                src: '',
                type: 'base'
            },
            new CoordinatesService()
        )
    })

    describe('config', () => {
        it('should return calculated coordinates', () => {
            expect(decorator.config.coordinates).to.be.deep.equal({
                gx: 40,
                gy: 50,
                lx: 30,
                ly: 40
            })
        })
    })
})
