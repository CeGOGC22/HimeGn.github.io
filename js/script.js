/*function mouseOver(mOver) {

    if(mOver == "logos"){
    var nLogos = [1,2,3,4,5,6,7,8,9];
    var count = 0;
    document.getElementById("main").style.transition="all 0.7s ease-in-out";
    logoIter();
    function logoIter(){
      
      document.getElementById("main").style.backgroundSize = "100% 100%";
      document.getElementById("main").style.backgroundRepeat = "no-repeat";
      
      tOut = setTimeout(function(){
        count++;
        if (count < nLogos.length) {
          logoIter();             
        }else{
          count = 0;
          logoIter();
        }                       
      }, 2000)
    }

  }*/

  document.getElementById("logos").onmouseover = function() {mouseOver("logos")};
  document.getElementById("logos").onmouseout = function() {mouseOut("logos")};
  document.getElementById("ilart").onmouseover = function() {mouseOver("ilart")};
  document.getElementById("ilart").onmouseout = function() {mouseOut("ilart")};
  document.getElementById("merch").onmouseover = function() {mouseOver("merch")};
  document.getElementById("merch").onmouseout = function() {mouseOut("merch")};
  document.getElementById("clients").onmouseover = function() {mouseOver("clients")};
  document.getElementById("clients").onmouseout = function() {mouseOut("clients")};
  document.getElementById("mainLogo").onmouseover = function() {mouseOver("mainLogo")};
  document.getElementById("mainLogo").onmouseout = function() {mouseOut("mainLogo")};
  document.getElementById("hdMain").onmouseout = function() {mouseOut("mainLogo")};
  document.getElementById("sbbtn").onclick = function() {openNav()};
  document.getElementById("closebtn").onclick = function() {closeNav()};
  var tOut;
  
  function mouseOver(mOver) {
  
    if(mOver == "logos"){
      document.getElementById("main").style.backgroundImage = "url(../root/media/fotologos.jpg)";
      document.getElementById("main").style.backgroundSize = "100% 100%";
      document.getElementById("main").style.backgroundRepeat = "no-repeat";
    }
    else if(mOver == "ilart"){
      document.getElementById("main").style.backgroundImage = "url(../root/media/fotoilustracion.jpg)";
      document.getElementById("main").style.backgroundSize = "100% 100%";
      document.getElementById("main").style.backgroundRepeat = "no-repeat";
    }
    else if(mOver == "clients"){
      document.getElementById("main").style.backgroundImage = "url(../root/media/fotoclientes.jpg)";
      document.getElementById("main").style.backgroundSize = "100% 100%";
      document.getElementById("main").style.backgroundRepeat = "no-repeat";
    }
    else if(mOver == "merch"){
      document.getElementById("main").style.backgroundImage = "url(../root/media/foto_merch.jpg)";
      document.getElementById("main").style.backgroundSize = "100% 100%";
      document.getElementById("main").style.backgroundRepeat = "no-repeat";
    }
    else if(mOver == "mainLogo")
    {
      document.getElementById("mainLogo").innerHTML = "<img  src='logos/LogoHGNF.png' width='328' height='130'>"
    }
  }
  
    function mouseOut(mOut) {
  
     
      if(mOut == "mainLogo")
      {
        document.getElementById("mainLogo").innerHTML = "<img  src='logos/LogoHGN.png'width='100' height='130'>";
      }

      else
      {
        clearTimeout(tOut);
        document.getElementById("main").style.backgroundImage = "";
      }
    }

    function openNav(){
      document.getElementById("moSidebar").style.width = "100%";
    }

    function closeNav(){
      document.getElementById("moSidebar").style.width = "0";
    }
