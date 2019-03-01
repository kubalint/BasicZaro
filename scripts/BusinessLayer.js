'use strict'
var dataToInit=[];
var eredmenyek=[];

function initDataStore(){
    
    var tanulok= ["s-timi","c-patrik","b-gizi","e-roland"];
    var tantargyak = ["Földrajz","Ének","Matek","Biológia","Informatika","Testnevelés"];
    
   /*function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

      var currentDateRaw=randomDate(new Date(2018, 8, 1), new Date(2019, 1, 31));

      if (currentDateRaw.getDay()<10){
          var day = "0"+currentDateRaw.getDay();
      } else {
          var day = currentDateRaw.getDay();
      }
      var currentDate= currentDateRaw.getFullYear()+"-"+currentDateRaw.getMonth()+"-"+day;
      */

    for(var i=0; i<100; i++){
       
        var year=2018;
        var month=Math.floor(Math.random()*4)+2;
        var day=Math.floor(Math.random()*27)+1;
        if(day<10){
            var currentDay="0"+day;

        } else {
            var currentDay=day;
        }


        var currentDate=year+"-0"+month+"-"+currentDay;

        var currentTanuloIndex=Math.floor(tanulok.length*Math.random());
        var currentTantargyIndex=Math.floor(tantargyak.length*Math.random());
        var currentErdemjegy = Math.floor(Math.random()*5)+1;
        dataToInit.push(new Eredmeny(tanulok[currentTanuloIndex],tantargyak[currentTantargyIndex],currentErdemjegy,currentDate));


    }
    console.log(dataToInit);
    var stringData = JSON.stringify(dataToInit);
}

function importData(inport){
    var tempArray=JSON.parse(inport);

    function anonimToEredmeny(item, index, originalArray) {
        return new Eredmeny(
            item.tanulo,
            item.tantargy,
            item.erdemjegy,
            item.datum
        );
    }

    return tempArray.map(anonimToEredmeny);

}

