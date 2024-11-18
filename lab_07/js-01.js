function f1() {
    var num, prNum, out, tempOut;
    
    prNum = 100 ;
    tempOut = document.getElementById('temp-out');
    tempOut.innerHTML = prNum;


    num = document.getElementById('mynum').value;
    out = document.getElementById('out');

    if (num == prNum) {
        out.innerHTML = 'You Won!';

    }
    else if (num > prNum) {
        out.innerHTML = 'Ти ввів більше число ніж потрібно';

    }
    else {
        out.innerHTML = 'Ти ввів менше число ніж потрібно';
    }
    

}