const prijsFris = 1.77
const prijsBier = 2.50
const prijsWijn = 2.90

function routine(){
        var horeca = prompt("Wilt u fris, bier of wijn bestellen?\nfris €1,77\nbier €2,50\nwijn €2,90");
        if(horeca == "fris"){
            var aantalFris = prompt("Hoeveel fris wilt u bestellen?");
            console.log("NIEUWE BESTELLING!", aantalFris, "fris");
        }else if(horeca == "bier"){
            var aantalBier = prompt("Hoeveel bier wilt u bestellen?");
        }else if(horeca == "wijn"){
            var aantalWijn = prompt("Hoeveel wijn wilt u bestellen?");
        }else if(horeca == "stop"){
            routine2();
        }else{
            alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
        }
        routine();
    
}

function routine2(){
    var totaalFris = aantalFris * prijsFris;
    alert(totaalFris);
}