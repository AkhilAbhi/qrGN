var input = document.querySelector('#url');
var button = document.querySelector('.submit');
var img = document.querySelector('#img');
var h2 = document.querySelector('#h2');
var imgdiv = document.querySelector('#imgDiv');
var Waring= document.querySelector('.Waring');
var box= document.querySelector('.box');

button.onclick = function(){
 
  
  var s=input.value.length;
  if (s>=1) {
  //alert('hay');
  input.style.border='2px solid #03fcd3';
  box.style.border='2px solid lawngreen';
  Waring.style.display='none';
  button.innerHTML='Generating..'
  img.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+input.value;
  img.onload=function(){
    button.innerHTML='Generate'
    imgdiv.style.display='block';
  }
}else{
  Waring.style.display='block';
  box.style.border='2px solid red';
  input.style.border='2px solid red';
  imgdiv.style.display='none';
  
}


};