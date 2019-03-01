'use strict'

window.addEventListener('load', Window_Load_Handler, false);

function Window_Load_Handler(){
    //initDataStore();
    var selectElement = document.getElementById("statSelect");
    selectElement.addEventListener('change',selectHandler,false);

    var genButton = document.getElementById("genButton");
    genButton.addEventListener('click',generateHandler,false);
    var printButton = document.getElementById("printButton");
    printButton.addEventListener('click',printHandler,false);
    eredmenyek = importData(toImport);
    drawTable(eredmenyek);
    osztalyStatistics(eredmenyek);
    drawStatTable(stat);
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

function drawStatTable(inputarray) {
    var nodeTBody = document.querySelector('#pnlStat Table > TBODY');

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

function drawAllStudentStat(tanulo,inputarray) {
    var containerDiv = document.querySelector('#naplofelulet');

    
    var table = document.createElement("table");
    table.setAttribute("border","1");
    var tanuloRow= document.createElement("tr");
    var cell = document.createElement("th");
    cell.setAttribute("colspan","2");
    cell.innerText=tanulo;
    tanuloRow.appendChild(cell);
    table.appendChild(tanuloRow);

    var header=  document.createElement("tr");
    var cell=document.createElement("th");
    cell.innerText="Tantárgy";
    header.appendChild(cell);

    var cell=document.createElement("th");
    cell.innerText="Érdemjegy";
    header.appendChild(cell);

    table.appendChild(header);



    for (var i = 0; i < inputarray.length; i++) {
        var actualRow = document.createElement('TR');
        for (var k in inputarray[i]) {
            var actualTD = document.createElement('TD');
            actualTD.innerText = inputarray[i][k];
            actualRow.appendChild(actualTD);
        }
        table.appendChild(actualRow);
    }
       
    containerDiv.appendChild(table);
    var br=document.createElement("br");
    containerDiv.appendChild(br);
}

function selectHandler(){
    var valasztas=event.target.value;
   // alert(valasztas);

    

    switch (valasztas){
        case "osztaly": drawStatTable(stat); break;

        case "patrik": drawStatTable(tanuloStat("c-patrik",eredmenyek)); break;

        case "roland": drawStatTable(tanuloStat("e-roland",eredmenyek)); break;

        case "gizi": drawStatTable(tanuloStat("b-gizi",eredmenyek)); break;

        case "timi": drawStatTable(tanuloStat("s-timi",eredmenyek)); break;
    }
}

function generateHandler(){
    var tanulok=["b-gizi","c-patrik","e-roland","s-timi"];

    var containerDiv = document.querySelector('#naplofelulet');

    while (containerDiv.childElementCount > 0) {
        containerDiv.removeChild(containerDiv.firstElementChild);
    }

    for (var i=0; i<tanulok.length; i++){
        drawAllStudentStat(tanulok[i],tanuloStat(tanulok[i],eredmenyek));
    }


}

function printHandler()
    
    {
        var mywindow = window.open('', 'PRINT', 'height=400,width=600');
    
        mywindow.document.write('<html><head><title>' + document.title  + '</title>');
        mywindow.document.write('</head><body >');
        mywindow.document.write('<h1>' + document.title  + ' kivonat</h1>');
        mywindow.document.write(document.getElementById("naplofelulet").innerHTML);
        mywindow.document.write('</body></html>');
    
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
    
        mywindow.print();
        mywindow.close();
    
        return true;
    }
