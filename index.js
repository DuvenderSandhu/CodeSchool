console.log(document.querySelector('.nav').style.height)
document.querySelector('.t-nav').addEventListener('click', function(){
    let css=getComputedStyle(document.querySelector('.sec-nav')).height;
    if(css!='0px'){
        document.querySelector('.sec-nav').style.height="0px"
        document.querySelector('.sec-nav').style.display="none"
    }
    else if(css==='0px'){
        document.querySelector('.sec-nav').style.height="auto"
        document.querySelector('.sec-nav').style.display="flex"

    }
    console.log(css)
})