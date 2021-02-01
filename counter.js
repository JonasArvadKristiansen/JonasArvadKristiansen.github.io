let y = Math.floor(Math.random() * 100 + 1);       
let guess = 1; 
  
doc.getElementById("indsendgæt").onclick = function(){
let x = doc.getElementById("gættal").value;

if(x == y) 
{     
   alert("Du gættede rigtigt i "
           + guess + " gæt ");
   doc.getElementById('gættal').value='';
} 
else if(x > y)
{     
   guess++; 
   alert("Prøv et mindre tal");
   doc.getElementById('gættal').value='';
} 
else
{ 
   guess++; 
   alert("Prøv et større tal")
   doc.getElementById('gættal').value='';
} 
}