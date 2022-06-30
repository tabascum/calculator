function insert(num) {
    let number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function wipe() {
    document.getElementById('result').innerHTML = " ";
}

function del() {
    let res = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = res.substring(0, res.length -1)
}

function calc() {
    let res = document.getElementById('result').innerHTML;
    if (res) {
        document.getElementById('result').innerHTML = eval(res);
    } else {
        document.getElementById('result').innerHTML = "no values"
    }
}
 