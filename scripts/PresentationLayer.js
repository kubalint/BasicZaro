'use strict'

window.addEventListener('load', Window_Load_Handler, false);

function Window_Load_Handler(){
    //initDataStore();
    eredmenyek = importData(toImport);
    drawTable(eredmenyek);
}

function drawTable(inputarray) {
    var nodeTBody = document.querySelector('#pnlTable Table > TBODY');

    while (nodeTBody.childElementCount > 0) {
        nodeTBody.removeChild(nodeTBody.firstElementChild);
    }
    

    for (var i = 0; i < inputarray.length; i++) {
        var actualRow = document.createElement('TR');
        for (var k in inputarray[i]) {
            var actualTD = document.createElement('TD');
            actualTD.innerText = inputarray[i][k];
            actualRow.appendChild(actualTD);
        }
        nodeTBody.appendChild(actualRow);
    }
       

}