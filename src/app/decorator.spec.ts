/**
 * Created by gustav on 4/21/17.
 */

import { expect } from 'chai'
import Decorator from './decorator'
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('Decorator', () => {
    let decorator: Decorator

    beforeEach(() => {
        decorator = new Decorator()
    })

    describe('render', () => {
        it('should return true', () => {
            const result = decorator.render()
            expect(result).to.equal(true)
        })
    })
})
