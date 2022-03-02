var numer = Math.floor(Math.random()*5)+1;

function fotka()
{
    numer++; if (numer>3) numer=1
    var fota = "<img src=\"fotka" + numer + ".jpg\"/>";
    document.getElementById("fot").innerHTML =fota;
    setTimeout("fotka()",5000);
}