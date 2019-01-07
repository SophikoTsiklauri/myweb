var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("MySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
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
var count1=0;
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
        count1++;
    }
    Dictionary[i].KeyInput.addEventListener("click",function(){
    for(var j = 0; j < Dictionary.length; j++)
    {
      if(this == Dictionary[j].KeyInput)
      {
        Dictionary[j].ErrorMessValue.style.display = "none";
        Dictionary[j].KeyInput.style.marginBottom = "25px";
        count1--;
      }
    }
  })
  }
  if (count1>0)
    {
      return false;
    }
  else return true;
}


function ClearInputs(Logic)
{
  if(Logic == true)
  {
    for(var i = 0; i < TextFields.length; i++)
    {
      var Input = TextFields[i].querySelector(".inp");
      input.value = " ";
    }
  }
}





var form3=document.querySelector(".form_3");
var RadioButtons = document.querySelectorAll(".radio");
var RadioError = document.querySelector("#radio_error");
var count=0;
function CheckRadioFields()
{
    for(var i = 0; i < RadioButtons.length; i++)
    {
      if(RadioButtons[i].checked == true)
      {
        RadioError.style.display="none";
        RadioError.style.marginTop="0px;"
        return true;
      }
      else 
      {
        RadioError.style.display="block";
        form3.style.marginTop="40px";
        count++;
      }
    }
    for(var i = 0; i < RadioButtons.length; i++)
    {
    RadioButtons[i].addEventListener("click",function(){
    RadioError.style.display = "none";
    form3.style.marginTop="55px";
    count--;
    })
}
  if(count==RadioButtons.length)return false;
}
function ClearInputs(Logic)
{
  if(Logic == true)
  {
    for(var i = 0; i < TextFields.length; i++)
    {
      var Input = TextFields[i].querySelector(".inp");
      Input.value = "";
    }
  }
  for(var i = 0; i < RadioButtons.length; i++){
    RadioButtons[i].checked = false;
  }

}

var thank=document.querySelector(".thank");

$("#SentButton").click(function(){
  
  if (CheckTextFields()==true&&CheckRadioFields()==true) {
    ClearInputs(true);
    thank.style.display="inline-block";
    setTimeout(function(){ thank.style.display="none"; }, 5000);
    
  }
  else{
    CheckTextFields();
    CheckRadioFields();
  }
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

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
        window.location.hash = hash;
      });
    } 
  });
});
