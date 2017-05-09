import {expect} from 'chai'
import CoordinatesService from './coordinates.service'
import Decorator from './decorator'
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('Decorator', () => {
    let decorator: Decorator

    describe('config', () => {
        it('should calculate coordinates adding local coordinates to global ones', () => {
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

            expect(decorator.config.coordinates).to.be.deep.equal({
                gx: 40,
                gy: 50,
                lx: 30,
                ly: 40
            })
        })

        it('should merge and replace the configuration attributes for newer ones of present', () => {
            decorator = new Decorator(
                {
                    attr: {
                        fill: 'red',
                        stroke: '#123456',
                        strokeWidth: '1px'
                    },
                    coordinates: {
                        gx: 10,
                        gy: 10,
                        lx: 0,
                        ly: 0
                    },
                    size: {
                        height: 10,
                        width: 20
                    },
                    src: '',
                    type: 'base'
                },
                {
                    attr: {
                        fill: 'empty',
                        stroke: '#000',
                        strokeWidth: '1px'
                    },
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
                    src: './assets/ad-hoc-marker.svg',
                    type: 'decorator'
                },
                new CoordinatesService()
            )

            expect(decorator.config).to.be.deep.equal({
                attr: {
                    fill: 'empty',
                    stroke: '#000',
                    strokeWidth: '1px'
                },
                coordinates: {
                    gx: 40,
                    gy: 50,
                    lx: 30,
                    ly: 40
                },
                size: {
                    height: 30,
                    width: 30
                },
                src: './assets/ad-hoc-marker.svg',
                type: 'decorator'
            })
        })
    })
})
