
    function submitForm() {
    var phoneNumber = document.getElementById('phone').value;
    var name = document.getElementById('name').value;
    var operator = getOperator(phoneNumber);

    // Формат виводу у вигляді таблиці
    var tableOutput = document.getElementById('output');
    var tableRow = document.createElement('tr');
    tableRow.innerHTML = '<td>' + phoneNumber + '</td><td>' + name + '</td><td>' + operator + '</td>';
    tableOutput.appendChild(tableRow);
}

    function getOperator(phoneNumber) {
    var operatorCode = phoneNumber.substring(0, 3);
    switch (operatorCode) {
    case '066':
    case '095':
    case '050':
    case '099':
    return ' Водафон';
    case '063':
    case '073':
    case '093':
    return ' Лайфсел';
    case '067':
    case '098':
    case '068':
    case '096':
    case '097':
    return ' Київстар';
    // Додайте інші оператори за необхідності
    default:
    return 'Невідомий оператор';
}
}
