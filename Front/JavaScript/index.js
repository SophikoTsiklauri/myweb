var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("MySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

$("#myMenu,#myClose,#myDropdown a").click(function(){
  	document.getElementById("myMenu").classList.toggle("hide");
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myClose").classList.toggle("show");
}
);


var TextFields = document.querySelectorAll(".TextFields");

function CheckTextFields(){
  for(var i = 0; i < TextFields.length; i++)
  {
    var Input = TextFields[i].querySelector(".inp");
    if(Input.value == " " || Input.value =="")
    {
        Input.style.marginBottom = "0px";
        var ErrorMess = TextFields[i].querySelector(".error");
        ErrorMess.style.marginTop = "0px";
        ErrorMess.style.marginBottom = "11px";
        ErrorMess.style.display = "block";
    }
  }
}

var Dictionary = []

for(var i = 0; i < TextFields.length; i++)
{
    var Input = TextFields[i].querySelector(".inp");
    var ErrorMess = TextFields[i].querySelector(".error");
    Dictionary.push({
      KeyInput : Input,
      ErrorMessValue : ErrorMess,
    });
}


for(var i = 0; i < Dictionary.length; i++)
{
  Dictionary[i].KeyInput.addEventListener("click",function(){
    for(var j = 0; j < Dictionary.length; j++)
    {
      if(this == Dictionary[j].KeyInput)
      {
        Dictionary[j].ErrorMessValue.style.display = "none";
        Dictionary[j].KeyInput.style.marginBottom = "25px";
      }
    }
  })
}



var RadioButtons = document.querySelectorAll(".radio");
var RadioError = document.querySelector("#radio_error");

function CheckRadioFields()
{
    for(var i = 0; i < RadioButtons.length; i++)
    {
      if(RadioButtons[i].checked == true)
      {
        RadioError.style.display="none";
        RadioError.style.marginTop="0px;"
        break;df
      }
      else if(RadioButtons[i].checked == false)
      {
        RadioError.style.display="block";
        RadioError.style.marginTop="0px;"
      }
    }
}

for(var i = 0; i < RadioButtons.length; i++)
{
  RadioButtons[i].addEventListener("click",function(){
    RadioError.style.display = "none";
  })
}



$("#SentButton").click(function(){
  CheckTextFields();
  CheckRadioFields();
});



document.getElementById('shareBtn').onclick = function() {
  FB.ui({
    method: 'share',
    display: 'popup',
    href: 'https://developers.facebook.com/docs/',
  }, function(response){});
}

document.getElementById('shareBtnSec').onclick = function() {
  FB.ui({
    method: 'share',
    display: 'popup',
    href: 'https://developers.facebook.com/docs/',
  }, function(response){});
}

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '2264454817133195',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.2'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


var LeftArrow = document.querySelector(".prev");
var RightArrow = document.querySelector(".next");

var LeftArrowCont = document.querySelector(".halfcircle1");
var RightArrowCont = document.querySelector(".halfcircle2");

LeftArrow.addEventListener("mouseover",function(){
  LeftArrowCont.style.display = "inline-block";
  LeftArrowCont.style.WebkitAnimation = "halfcircleAnimationInit 1s 1";
});

RightArrow.addEventListener("mouseover",function(){
  RightArrowCont.style.display = "inline-block";
  RightArrowCont.style.WebkitAnimation = "halfcircleAnimationInit 1s 1";
})


LeftArrow.addEventListener("mouseleave",function(){
  LeftArrowCont.style.WebkitAnimation = "halfcircleAnimationOut 1s 1";
  setTimeout(function(){LeftArrowCont.style.display = "none";}, 300)
});

RightArrow.addEventListener("mouseleave",function(){
  RightArrowCont.style.WebkitAnimation = "halfcircleAnimationOut 1s 1";
  setTimeout(function(){RightArrowCont.style.display = "none";}, 300);
})

