var finalRate;
function validate(){
    let rollLength= document.getElementById("length").value;
    let rollHeight= document.getElementById("height").value;
    let rollGsm= document.getElementById("roll").value;
    let rollRate= document.getElementById("roll-kg").value;
    
    
 
    
    var meter= 250;
    var height= 39;
        var rolllength1=(meter*height)/rollLength;
    console.log(rolllength1);
   
    var rollRadius= 0.4;
       var radius=(rollRadius)*rollGsm;
    console.log(radius);

    var fullWeight= 40;
    var fullHeight= 63;
       var Height= (fullWeight/fullHeight)*rollHeight;
       console.log(Height);

       var rate=(Height)*rollRate;
    finalRate=(rate)/rolllength1;
       console.log(rate);
       console.log(finalRate);

}

function estimate(){
  var sheetRate= document.getElementById("sheet").value??0;
  var pattiRate= document.getElementById("Patti").value??0;
  var printingRate= document.getElementById("print").value??0;
  var stitchingRate= document.getElementById("Stitching").value??0;
  var stickRate= document.getElementById("stick").value??0;
  var rollCutting= document.getElementById("c-rate").value??0;
  var otherExp=document.getElementById("exp").value??0;
  var displayData=document.getElementById("data");
  var btn=document.getElementById("btn");

 
   
  btn.addEventListener('click', estimate);



  /*var rate1=+finalRate+(+sheetRate);
/* console.log(rate1,"1");
  if(sheetRate>0){
   displayData.innerHTML=("total=", + rate1);
  }else{
   return null;
  }*/
  
 
/*var rate2=+finalRate+(+pattiRate);
/*console.log(rate2, "2");
 if(pattiRate>0){
   displayData.innerHTML=("total=", + rate2);
  }else{
   return null;
  }*/
  

  /*var rate3=+finalRate+(+printingRate);
  /*console.log(rate3, "3");
 
  if(printingRate>0){
   displayData.innerHTML=("total=", + rate3);
  }else{
   return null;
  }*/

  
  
  /*var rate4=+finalRate+(+stitchingRate);
  /*console.log(rate4, "4")
  if(rate4>0){
   displayData.innerHTML=("total=", + rate4);
  }else{
   return null;
  }*/

  /*var rate5=+finalRate+(+stickRate);
  /*console.log(rate5, "5")
 
  if(rate5>0){
   displayData.innerHTML=("total=", + rate5);
  }else{
   return null;
  }*/

 /* var rate6=+finalRate+(+rollCutting);
  /*console.log(rate6, "6" )
 
if(rate6>0){
   displayData.innerHTML=("total=", + rate6);
  }else{
   return null;
  }*/

  /*var rate7=+finalRate+(+otherExp);
  /*console.log(rate7, "7");

  if(rate7>0){
   displayData.innerHTML=("total=", + rate7);
  }else{
   return null;
  }*/


 var final=((+sheetRate)+(+pattiRate)+(+printingRate)+(+stitchingRate)+(+stickRate)+(+rollCutting)+(+otherExp))+(finalRate);
  displayData.innerHTML=("Input :"+ final)
  console.log(final);


}




    


