function appendNumber(num) {
    document.getElementById('result').value += num;
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function appendDecimal() {
    const currentResult = document.getElementById('result').value;
    if (!currentResult.includes('.')) {
        document.getElementById('result').value += '.';
    }
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}

function calculateResult() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}