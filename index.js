

let btn = document.getElementById('btn');
btn.addEventListener('click' , function(){

  
   // username
   var username = document.getElementById("username").value; // get value username
   var usernameset = document.getElementById("detailsname");// get label value for set the username value
   usernameset.innerHTML = "YOUR USERNAME :"+" "+username; // set and show value

    const inputs = document.querySelectorAll('#username'); // clear
    inputs.forEach(input =>{
    input.value ='';
    })
   //  end username code


   //age 
    var age = document.getElementById("age").value; // get the value age 
    var ageset = document.getElementById("detailsage"); // get label value for set the age value
    ageset.innerHTML = "YOUR AGE :"+" "+age; //set value and show

    const inputs1 = document.querySelectorAll('#age'); // clear
    inputs1.forEach(input =>{
    input.value ='';
    })
   // end age code



   // weight and height
    let weight =document.getElementById('weight').value; // get weight value
    let height =document.getElementById('height').value; // get height value
    


    var finalbimresults = document.getElementById("resultbmi");
    let bmifinal = (weight/((height*height)/10000)).toFixed(2);
    if( bmifinal < 18.6){
       finalbimresults.innerHTML = "UNDER WEIGHT :" +"  "+ bmifinal; // set bmi value
       
     }else if (bmifinal >= 18.6 &&  bmifinal < 24.9){
        finalbimresults.innerHTML = "NORMAL WEIGHT :"+" " + bmifinal; // set bmi value
         
     }else{
           finalbimresults.innerHTML = "OVER WEIGHT :"+" " + bmifinal; // set bmi value
               
     }

   const inputs2 = document.querySelectorAll('#weight'); // clear weight
    inputs2.forEach(input =>{
    input.value ='';
    })
 
    const inputs3 = document.querySelectorAll('#height'); // clear height
    inputs3.forEach(input =>{
    input.value ='';
    })
 
})

