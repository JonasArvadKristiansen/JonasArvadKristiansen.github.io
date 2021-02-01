// random value generated 
let y = Math.floor(Math.random() * 10 + 1); 
      
// counting the number of guesses 
// made for correct Guess 
let guess = 1; 
  
document.getElementById("indsendgæt").onclick = function(){ 
  
// number guessed by user      
let x = document.getElementById("gættal").value;

if(x == y) 
{     
   alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
           + guess + " GUESS ");
   document.getElementById('gættal').value='';
} 
else if(x > y) /* if guessed number is greater 
               than actual number*/ 
{     
   guess++; 
   alert("OOPS SORRY!! TRY A SMALLER NUMBER");
   document.getElementById('gættal').value='';
} 
else
{ 
   guess++; 
   alert("OOPS SORRY!! TRY A GREATER NUMBER")
   document.getElementById('gættal').value='';
} 
} 