var time = 3000;
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, time); // Change image every 2 seconds
}


 //change image

//  function changeImg(){
//     document.getElementById("slide").src = images[i];
//     if(i< images.length -1){
//         i++;
//     } else{
//         i=0;
//     }
//     setTimeout("changeImg()",time);
//  }
 document.addEventListener("DOMContentLoaded", changeImg)
 const prevIcon = document.getElementById('prev-icon');
 const nextIcon = document.getElementById('next-icon');
 var slideImage= document.getElementsByClassName('mySlides');
 const images=['images/SES DINNER.png','images/IEEE.png','images/TECH WEEK.png'];
 let currentIndex=0;
 prevIcon.addEventListener('click',()=> {
  currentIndex--;
  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }
  slideImage.src = images[currentIndex];
});
nextIcon.addEventListener('click',() =>{
  currentIndex++;
  if(currentIndex >= images.length ){
    currentIndex = 0;
  }
  slideImage.src=images[currentIndex];
});

