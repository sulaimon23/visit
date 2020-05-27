let wrap = document.querySelectorAll('.wrap');
let red = document.querySelectorAll('.red');


wrap.forEach((e, index) => {
 if(index%2 == 0){
  e.className = 'red'
 }else{
  e.className = 'wrap'
 }
});

red.forEach((e, index) => {
 if(index%2 == 0){
  e.className = 'wrap'
 }else{
  e.className = 'red'
 }
});

// let toggle = true;
// let drop = document.querySelector('.drop');
// let bar = document.querySelector('.bar');
// bar.addEventListener('click', dis)
// function dis () {
//  if(toggle){
//   drop.style.display ="block";
//  }
//  if(toggle =! toggle){
//   drop.style.display ="none";
//  }
// }
$('.bar').click(function () {
 $('.drop').slideToggle(1000);
})

 

