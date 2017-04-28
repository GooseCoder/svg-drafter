import { expect } from 'chai'
import NullConfiguration from './null-configuration'
import NullDecorator from './null-decorator'
import Shape from './shape'
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('Shape', () => {
    let shape: Shape

    beforeEach(() => {
        shape = new Shape()
    })

    describe('render', () => {
        it('should return true', () => {
            const result = shape.render()
            expect(result).to.equal(true)
        })
    })

    describe('addBase', () => {
        it('should add a new base', () => {
            const baseConfig = new NullConfiguration()
            shape.addBaseConfig(baseConfig)
            const addedBase = shape.getBaseConfig()
            expect(addedBase).to.equal(baseConfig)
        })

        it('should override the old base with a new one', () => {
            const baseConfig = new NullConfiguration()
            shape.addBaseConfig(baseConfig)
            const newBaseConfig = new NullConfiguration()
            shape.addBaseConfig(newBaseConfig)
            const addedBase = shape.getBaseConfig()
            expect(addedBase).to.equal(newBaseConfig)
        })
    })

    describe('getBase', () => {
        it('should add a new base', () => {
            const baseConfig = new NullConfiguration()
            shape.addBaseConfig(baseConfig)
            const addedBase = shape.getBaseConfig()
            expect(addedBase).to.equal(baseConfig)
        })

        it('should retrieve an instance of NullDecorator if no base has been set', () => {
            const addedBase = shape.getBaseConfig()
            expect(addedBase).to.be.an.instanceof(NullConfiguration)
        })
    })

    describe('addDecorator', () => {
        it('should add a new Decorator', () => {
            const decorator = new NullDecorator()
            shape.addDecorator(decorator)
            expect(shape.getDecorator(decorator.getId())).to.equal(decorator)
        })

        it('should add multiple decorators each accessible by their id', () => {
            const decoratorA = new NullDecorator()
            shape.addDecorator(decoratorA)
            const decoratorB = new NullDecorator()
            shape.addDecorator(decoratorB)
            const decoratorC = new NullDecorator()
            shape.addDecorator(decoratorC)

            expect(shape.getDecorator(decoratorA.getId())).to.equal(decoratorA)
            expect(shape.getDecorator(decoratorB.getId())).to.equal(decoratorB)
            expect(shape.getDecorator(decoratorC.getId())).to.equal(decoratorC)
            expect(shape.getDecorators().size).to.equal(3)
        })

        it('should remove a decorator by their id', () => {
            const decoratorA = new NullDecorator()
            shape.addDecorator(decoratorA)
            const decoratorB = new NullDecorator()
            shape.addDecorator(decoratorB)

            expect(shape.removeDecorator(decoratorA.getId())).to.equal(true)
            expect(shape.getDecorator(decoratorA.getId())).to.be.undefined
            expect(shape.getDecorators().size).to.equal(1)
        })
    })
})
