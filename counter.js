let y = Math.floor(Math.random() * 10 + 1); 
      
let guess = 1; 
  
document.getElementById("indsendgæt").onclick = function(){ 
  

let x = document.getElementById("gættal").value;

if(x == y) 
{     
   alert("Du gæætede rigtigt i "
           + guess + " gæt ");
   document.getElementById('gættal').value='';
} 
else if(x > y)
{     
   guess++; 
   alert("Prøv et mindre tal");
   document.getElementById('gættal').value='';
} 
else
{ 
   guess++; 
   alert("Prøv et større tal")
   document.getElementById('gættal').value='';
} 
} 