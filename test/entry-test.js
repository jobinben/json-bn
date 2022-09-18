import { parse } from '../index.js';
import { expect } from 'chai';

describe('Testing entry: ', function () {

    it('Should support importing ESM.', function(done){
       expect(typeof parse).to.equal('function');
       done();
    });

})