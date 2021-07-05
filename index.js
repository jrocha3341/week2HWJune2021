
let position = 0;
const MAXPX = -1500;

const forwardSlide = function (){

    const imageSliderJavaScript = document.getElementById('imageSliderJavaScript');
    position -=300;

    if (position > MAXPX) {
        
        imageSliderJavaScript.style.transform = `translateX(${position}px)`;
        
      } else {
        position = 0;
        imageSliderJavaScript.style.transform = `translateX(${position}px)`;

      }

    


}

const backSlide = function (){

    const imageSliderJavaScript = document.getElementById('imageSliderJavaScript');
    position +=300;

    if (position < 0) {
        
        imageSliderJavaScript.style.transform = `translateX(${position}px)`;
        
      } else {
        position = -1200;
        imageSliderJavaScript.style.transform = `translateX(${position}px)`;

      }

    imageSliderJavaScript.style.transform = `translateX(${position}px)`;
}

//  document.getElementById()