const prijsFris = 1.80;
const prijsBier = 2.50;
const prijsWijn = 2.90;
const prijsBitterballen = 0.5625;
 
var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;
var aantalBitterballen = 0;

var totaalFris = 0;
var totaalBier = 0;
var totaalWijn = 0;
var totaalBitterballen = 0;

var portieBitterballen = 0;

function routine(){
    var horeca = prompt("Wilt u fris, bier, wijn of snacks bestellen?\nfris €1,80\nbier €2,50\nwijn €2,90\nsnacks 8x $4,50 16x $9,00\nTyp stop om af te rekenen").toLowerCase();
    if(horeca == "fris"){
        aantalFris = prompt("Hoeveel glazen fris wilt u bestellen?");
        console.log("NIEUWE BESTELLING!", aantalFris, "glazen fris");
        routine();
    }else if(horeca == "bier"){
        aantalBier = prompt("Hoeveel glazen bier wilt u bestellen?");
        console.log("NIEUWE BESTELLING!", aantalBier, "glazen bier")
        routine();
    }else if(horeca == "wijn"){
        aantalWijn = prompt("Hoeveel glazen wijn wilt u bestellen?");
        console.log("NIEUWE BESTELLING!", aantalWijn, "glazen wijn")
        routine();
    }else if(horeca == "stop"){
        routine2();
    }else if(horeca == "snack"){
        aantalBitterballen = prompt("Wilt u een portie van 8 of 16? Typ 'terug' om terug te gaan.");
        if(aantalBitterballen == "8"){
            portieBitterballen = prompt("Hoeveel porties van 8 wilt u?");
            routine();
        }else if(aantalBitterballen == "16"){
            portieBitterballen = prompt("Hoeveel porties van 16 wilt u?");
            routine();
        }else{
            alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.");
            routine();
        }
    }else{
        alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
        routine();
    }
}

function routine2(){
    if(aantalFris > 0){
        var totaalFris = aantalFris * prijsFris;
        document.write(aantalFris, " fris $", totaalFris.toFixed(2), "<br/>");
    }else{
        totaalFris = 0;
    }
    if(aantalBier > 0){
        var totaalBier = aantalBier * prijsBier;
        document.write(aantalBier, " bier $", totaalBier.toFixed(2), "<br/>");
    }else{
        totaalBier = 0;
    }
    if(aantalWijn > 0){
        var totaalWijn = aantalWijn * prijsWijn;
        document.write(aantalWijn, " wijn $", totaalWijn.toFixed(2), "<br/>");
    }else{
        totaalWijn = 0;
    }
    if(portieBitterballen > 0){
        var Bitterballen = portieBitterballen * aantalBitterballen;
        var totaalBitterballen = Bitterballen * prijsBitterballen;
        document.write(Bitterballen, " bitterballen $", totaalBitterballen.toFixed(2), "<br/>")
    }else{
        totaalBitterballen = 0;
    }
    var totaal = totaalWijn + totaalBier + totaalFris + totaalBitterballen;
    document.write("Totaal $", totaal.toFixed(2));

}