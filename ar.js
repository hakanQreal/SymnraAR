
var mv=  document.getElementById('modelviewer')
var device = '';
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
 if (/android/i.test(userAgent)) {
    device = "android"
} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    device = 'ios';
}

if (device == "ios"){
    ios()
} else if (device == 'android'){
    android()
}

function ios(){
   
    const t=new URL(mv.iosSrc,self.location.toString());
 
    const e = document.createElement("a")
    e.setAttribute("rel","ar");
    const n=document.createElement("img");
    e.appendChild(n); 
    e.setAttribute("href",t.toString());
    e.click();
    e.removeChild(n);
}

function android(){
    var buton = document.getElementById('androidFakeButton')
    buton.click()
}


    