var widthE = window.innerWidth;
var heightE = window.innerHeight/1.5
var section = document.querySelector('.sectionImg');
section.style.width = widthE + 'px';
section.style.height = heightE + 'px'

var s1 = document.querySelector('.sidebarH');
var s2 = document.querySelector('.sidebarB');
var s3 = document.querySelector('.hrT');
var s4 = document.querySelector('.flou');
var s5 = document.querySelector('.overlay');
var ham = document.querySelector('.hamburger');
var head = document.querySelector('#haut');
var content = document.querySelector('#content');


ham.addEventListener('click',function(e){
    e.preventDefault();
    s1.style.left = '0px';
    s2.style.left = '0px';
    s3.style.left = '0px';
    s4.style.left = '0px';
    s5.style.display = 'block';
    document.body.style.overflow = 'hidden';
});
s5.addEventListener('click',function(e){
        e.preventDefault();
        s1.style.left = '-100%';
        s2.style.left = '-100%';
        s3.style.left = '-100%';
        s4.style.left = '-100%';
        s5.style.display = 'none';
        document.body.style.overflow = 'scroll';
});
if(window.innerWidth >= 900){
    head.innerHTML += "<div id='contentH'>"+ content.innerHTML + "</div>";
}
