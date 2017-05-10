var clignotement = function(){ 
   if (document.getElementById('text').style.visibility=='visible'){ 
      document.getElementById('text').style.visibility='hidden'; 
   } 
   else{ 
   document.getElementById('text').style.visibility='visible'; 
   } 
}; 
periode = setInterval(clignotement,800);

document.body.addEventListener('click', function (){
    document.getElementById('bkg').style.visibility = 'visible';
    document.getElementById('video').style.visibility = 'hidden';
    document.getElementById('text').innerHTML = "CHECK YOUR SAMPLE"
})