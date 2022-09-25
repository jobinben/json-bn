const { parse } =  require('../dist/index.js');
const { expect } = require('chai');

describe('Testing entry: ', function () {

    it('Should support importing ESM.', function(done){
       expect(typeof parse).to.equal('function');
       done();
    });

})