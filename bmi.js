
function age()
{
    var a= parseInt(document.getElementById("v1").value);
    var b= parseInt(document.getElementById("v2").value);
    var k=b-a
     
    
   
    let  p = k;
    if(p<=1)
        {
            document.getElementById("r").textContent ="Invalid input "
            document.getElementById("g").textContent ="...please enter a valid input... "
            
            
    
        }
        else if (p>=1) {
            document.getElementById("r").textContent = "Your Age is"
            document.getElementById("g").textContent =k
            document.getElementById("x").textContent = "_._._._._._._._._._"
            
            
        } 
}
    



function bmi(){
    var a= parseInt(document.getElementById("v1").value);
    var b= parseInt(document.getElementById("v2").value);
    var v= b/100; 
    var g=v*v
    var e=a/g
     document.getElementById("r").textContent =e.toFixed(1)

    let  h = e;
    if(h<16)
        {
            document.getElementById("g").textContent = "Severe Thinness"
             document.getElementById("x").textContent = " Please Increase Your Weight"
    
        }
        else if (h>=16 && h<17) {
            document.getElementById("g").textContent ="Moderate thinness"
             document.getElementById("x").textContent = " Please Increase Your Weight"
            
        } 
        else if (h>=17 && h<18.5) {
            document.getElementById("g").textContent ="Mild Thinness"
             document.getElementById("x").textContent = " Please Increase Your Weight"
        x
        } 
        else if (h>=18.5 && h<25) {
            document.getElementById("g").textContent ="Normal "
             document.getElementById("x").textContent = "You are FIT and continue Like this"
            
        } 
        else if ( h>=25 && h<30) {
            document.getElementById("g").textContent ="Overweight"
             document.getElementById("x").textContent = " Please Reduce Your Weight"
            
        } 
        else if (h>=30 && h<35) {
            document.getElementById("g").textContent =" Obese Case 1"
             document.getElementById("x").textContent = " Please Reduce Your Weight"
            
        } 
        else if (h>=35 && h<40) {
            document.getElementById("g").textContent =" Obese Case 2"
             document.getElementById("x").textContent = " Please Reduce Your Weight"
            
        } 
        else if (h>=40 && h<45) {
            document.getElementById("g").textContent =" Obese Case 3"
             document.getElementById("x").textContent = " Please Reduce Your Weight"
            
        } 
        else if (h>45) {
            document.getElementById("g").textContent ="Invalid input "
            document.getElementById("x").textContent ="...please enter a valid input... "
            

            
      
      

     
        
        
}
}