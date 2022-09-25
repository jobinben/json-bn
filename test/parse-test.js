const { parse } =  require('../dist/index.js');
const { expect } = require('chai');

describe('Testing support: parse', function () {

    const jsonStr = '{"name":"jobin","result":true,"bn":18014398509481981,"small":123,"deci":1234567890.0123456,"obj":{"bn":18014398509481983,"arr": [123, {"bn": 18014398509481987}]}}';

    it('String type should be supported by default.', function(done){
        const source = parse(jsonStr);
        expect(typeof source.bn).to.equal('string');
        expect(source.bn).to.equal('18014398509481981');
        done();
    });

    it('Should support bigint type.', function(done) {
        const source = parse(jsonStr, {
            useType: 'bigint',
        });
        expect(typeof source.bn).to.equal('bigint');
        expect(source.bn).to.equal(18014398509481981n);
        expect(source.deci.toString()).to.equal('1234567890.0123456');
        done();
    });

    it('Should support array type.', function(done) {
        const source = parse(jsonStr, {
            useType: 'array',
        });
        expect(source.bn instanceof Array).to.equal(true);
        expect(source.bn.join('')).to.equal('18014398509481981');
        done();
    });

    it('Should support decimal.', function(done) {
        const source = parse(jsonStr);
        expect(source.deci).to.equal('1234567890.0123456');
        done();
    });

    it('Should support deep nested conversion.', function(done) {
        const source = parse(jsonStr);
        expect(source.obj.bn).to.equal('18014398509481983');
        expect(source.obj.arr[1].bn).to.equal('18014398509481987');
        done();
    });

});

