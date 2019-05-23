// function init() {
    let num1 = '';
    let oldNum;
    let result = 0;
    let num = '';
    let action;

    const inputFirst = document.getElementById('inputFirst');
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');
    const plus = document.getElementById('plus');
    const minus = document.getElementById('minus');
    const divide = document.getElementById('divide');
    const multi = document.getElementById('multi');
    const five = document.getElementById('five');
    const six = document.getElementById('six');
    const seven = document.getElementById('seven');
    const eight = document.getElementById('eight');
    const nine = document.getElementById('nine');
    const zero = document.getElementById('zero');
    const dot = document.getElementById('dot');
    const reset = document.getElementById('reset');
    const equal = document.getElementById('equal');
     const del = document.getElementById('del');

    reset.addEventListener('click', allNull, true);
    del.addEventListener('click', ce, true);
    one.addEventListener('click', writeOne, true);
    two.addEventListener('click', writeTwo, true);
    three.addEventListener('click', writeThree, true);
    four.addEventListener('click', writeFour, true);
    five.addEventListener('click', writeFive, true);
    six.addEventListener('click', writeSix, true);
    seven.addEventListener('click', writeSeven, true);
    eight.addEventListener('click', writeEight, true);
    nine.addEventListener('click', writeNine, true);
    zero.addEventListener('click', writeZero, true);
    dot.addEventListener('click', writeDot, true);
    plus.addEventListener('click', writeActionPlus, true);
    equal.addEventListener('click', getResult, true);
    minus.addEventListener('click', writeActionMinus, true);
    divide.addEventListener('click', writeActionDivide, true);
    multi.addEventListener('click', writeActionMulti, true);

    function writeOne() {
        if (num1.length <= 7)
            num1 = num1 + '1';
        toScreen(num1);
        return num1;
    };

    function writeTwo() {
        if (num1.length <= 7)
            num1 = num1 + '2';
        toScreen(num1);
        return num1;
    };

    function writeThree() {
        if (num1.length <= 7)
            num1 = num1 + '3';
        toScreen(num1);
        return num1;
    };

    function writeFour() {
        if (num1.length <= 7)
            num1 = num1 + '4';
        toScreen(num1);
        return num1;
    };

    function writeFive() {
        if (num1.length <= 7)
            num1 = num1 + '5';
        toScreen(num1);
        return num1;
    };

    function writeSix() {
        if (num1.length <= 7)
            num1 = num1 + '6';
        toScreen(num1);
        return num1;
    };

    function writeSeven() {
        if (num1.length <= 7)
            num1 = num1 + '7';
        toScreen(num1);
        return num1;
    };

    function writeEight() {
        if (num1.length <= 7)
            num1 = num1 + '8';
        toScreen(num1);
        return num1;
    };

    function writeNine() {
        if (num1.length <= 7)
            num1 = num1 + '9';
        toScreen(num1);
        return num1;
    };

    function writeZero() {
        if (num1.length <= 7)
            num1 = num1 + '0';
        toScreen(num1);
        return num1;
    };

    function writeDot() {
        if (num1.length <= 6)
            num1 = num1 + '.';
        toScreen(num1);
        dot.disabled = true;
        return num1;
    };

    function saveOldNum() {
        dot.disabled = false;
        oldNum = parseFloat(num1);
        num1 = '';
    };

    function writeActionPlus() {
        saveOldNum();
        toScreen('');
        action = doPlus;
    };

    function writeActionMinus() {
        saveOldNum();
        toScreen('');
        action = doMinus;
    };

    function writeActionDivide() {
        saveOldNum();
        toScreen('');
        action = doDivide;
        return
    };

    function writeActionMulti() {
        saveOldNum();
        toScreen('');
        action = doMulti;
    };

    function doPlus() {

        return oldNum + parseFloat(num1);
    };

    function doMinus() {
        return oldNum - parseFloat(num1);
    };

    function doDivide() {
        return oldNum / parseFloat(num1);
    };

    function doMulti() {
        return oldNum * parseFloat(num1);
    };

    function getResult() {
        result = action(oldNum, num1);
        num1 = result;
        toScreen(num1);
        return num1;
    };

    function allNull() {
        dot.disabled = false;
        oldNum = 0;
        num1 = '';
        toScreen(0);
        return num1;
    };

    function toScreen(n) {
        inputFirst.value = n;
    };
    function ce() {
        // let indexLastNum = num1.length;
       num1= num1.substring(0, num1.length - 1);
       // if(num1!==null) {
           toScreen(num1);
       // }
       // if(num1===null){
       //     console.log(' function ce() {  ')
       //     toScreen('0');
       // }
        return num1;
    }
    // inputFirst.value = num;
// }
//
// init();


