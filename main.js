var input = document.querySelector('#url');
var button = document.querySelector('.submit');
var img = document.querySelector('#img');
var h2 = document.querySelector('#h2');
var imgdiv = document.querySelector('#imgDiv');


button.onclick = function(){
 
  
  var s=input.value.length;
  if (s>=1) {
  //alert('hay');
  button.innerHTML='Generating..'
  img.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+input.value;
  img.onload=function(){
    button.innerHTML='Generate'
    imgdiv.style.display='block';
  }
}else{
  h2.innerHTML='Enter Text Or Url ';
  imgdiv.style.display='none';
}


};