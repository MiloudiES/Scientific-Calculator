// Define calculator buttons including numbers and operators
const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', '(', ')', 'DEL'
];

// Create calculator display and buttons container
document.getElementById('container').innerHTML = `
    <div class="calculator">
        <input type="text" id="display" readonly>
        <div class="buttons">
            ${buttons.map(btn => `<button onclick="handleClick('${btn}')">${btn}</button>`).join('')}
        </div>
    </div>
`;

let currentExpression = '';

function handleClick(value) {
    switch(value) {
        case '=':
            try {
                currentExpression = eval(currentExpression).toString();
            } catch (e) {
                currentExpression = 'Error';
            }
            break;
        case 'C':
            currentExpression = '';
            break;
        case 'DEL':
            currentExpression = currentExpression.slice(0, -1);
            break;
        default:
            currentExpression += value;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentExpression;
}



