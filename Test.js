describe(" test buttons", () => {
    before(() => {

    });
    it(`test 1`, function () {
        const act = writeOne();
        const exp = '1';
        assert.deepEqual(act, exp);
    });
        it(`test 12`, function () {
        const act = writeTwo();
        const exp = '12';
        assert.deepEqual(act, exp);
    });
    it(`test 123`, function () {
        const act = writeThree();
        const exp = '123';
        assert.deepEqual(act, exp);
    });
    it(`test 1234`, function () {
        const act = writeFour();
        const exp = '1234';
        assert.deepEqual(act, exp);
    });
    it(`test 12345`, function () {
        const act = writeFive();
        const exp = '12345';
        assert.deepEqual(act, exp);
    });
    it(`test 123456`, function () {
        const act = writeSix();
        const exp = '123456';
        assert.deepEqual(act, exp);
    });
        it(`test 1234567`, function () {
        const act = writeSeven();
        const exp = '1234567';
        assert.deepEqual(act, exp);
    });
    it(`test 12345678`, function () {
        const act = writeEight();
        const exp = '12345678';
        assert.deepEqual(act, exp);
    });
    it(`test upgrade`, function () {
        const act = allNull();
        const exp = '';
        assert.deepEqual(act, exp);
    });
    it(`test 123456789`, function () {
        const act = writeNine();
        const exp = '9';
        assert.deepEqual(act, exp);
    });
    it(`test dot`, function () {
        const act = writeDot();
        const exp = '9.';
        assert.deepEqual(act, exp);
    });
    it(`test 9.0`, function () {
        const act = writeZero();
        const exp = '9.0';
        assert.deepEqual(act, exp);
    });
    it(`test  plus`, function () {
        writeActionPlus();
        writeThree();
        const act = getResult();
            const exp = 12;
        assert.deepEqual(act, exp);
    });
    it(`test divide`, function () {
        writeActionDivide();
        writeTwo();
        const act = getResult();
        const exp = 6;
        assert.deepEqual(act, exp);
    });
    it(`test multiplication`, function () {
        writeActionMulti();
        writeTwo();
        const act = getResult();
        const exp = 12;
        assert.deepEqual(act, exp);
    });
    it(`test minus`, function () {
        writeActionMinus();
        writeFour();
        const act = getResult();
        const exp = 8;
        assert.deepEqual(act, exp);
    });
    it(`test max signs`, function () {
       allNull();
        writeFour();
        writeFour();
        writeFour();
        writeFour();
        writeFour();
        writeFour();
        writeFour();
        writeFour();
        writeFour();
        writeFour();
        const act =  writeFour();
        const exp = '44444444';
        assert.deepEqual(act, exp);
    });
    it(`test upgrade`, function () {
        const act = allNull();
        const exp = '';
        assert.deepEqual(act, exp);
    });
    it(`test ce`, function () {
        writeOne();
        writeTwo();
        writeThree();
        writeFour();
        const act = ce();
        const exp = '123';
        assert.deepEqual(act, exp);
    });
    it(`test ce`, function () {
        const act = ce();
        const exp = '12';
        assert.deepEqual(act, exp);
    });
    it(`test upgrade`, function () {
        const act = allNull();
        const exp = '';
        assert.deepEqual(act, exp);
    });
});