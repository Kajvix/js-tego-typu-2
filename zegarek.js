function zegarek()
{
    var data = new Date();
    var godzina = data.getHours();
    var minuta = data.getMinutes();
    var sekunda = data.getSeconds();
    var dzien = data.getDate();
    var dzienN = data.getDay();
    var miesiac = data.getMonth()+1;
    var rok = data.getFullYear();
   
    if (dzien < 10) dzien = "0" + dzien;
    if (miesiac < 10) miesiac = "0" + miesiac;
    if (sekunda < 10) sekunda = "0" + sekunda;
    if (minuta < 10) minuta = "0" + minuta;
    if (godzina < 10) godzina = "0" + godzina;

   
    var pokazDate = dzien + '.' + miesiac + '.' + rok + " roku " + godzina + ':' + minuta + ':' + sekunda;
    document.getElementById("zegar").innerHTML = pokazDate;
   
    setTimeout(zegarek, 1000);            
}   
