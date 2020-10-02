document.getElementById("sp-btn").onclick = function() {tabChng("sp-btn")};
document.getElementById("en-btn").onclick = function() {tabChng()};


function tabChng(selTab){

    if(selTab=="sp-btn"){
        document.getElementById("sp-btn").style.backgroundColor= "#fDC504";
        document.getElementById("sp-btn").style.color = "#292929";
        document.getElementById("en-btn").style.backgroundColor= "#292929";
        document.getElementById("en-btn").style.color = "#fDC504";
        document.getElementById("spanish").style.display = "block";
        document.getElementById("english").style.display = "none";
    }
    else{
        document.getElementById("en-btn").style.backgroundColor= "#fDC504";
        document.getElementById("en-btn").style.color = "#292929";
        document.getElementById("sp-btn").style.backgroundColor= "#292929";
        document.getElementById("sp-btn").style.color = "#fDC504";
        document.getElementById("english").style.display = "block";
        document.getElementById("spanish").style.display = "none";
    }
}