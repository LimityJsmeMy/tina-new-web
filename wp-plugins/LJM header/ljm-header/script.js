console.log('adding listener nr2');
var crt = document.getElementById("crt-dom");
console.log(crt);

console.log(document.body);
crt.addEventListener('pointermove', function (e) {     
console.log('listened');
if(crt.classList.contains('no-cursor')) {
    crt.classList.remove('no-cursor');
}
var rect = e.target.getBoundingClientRect();
document.body.style.setProperty('--mouseX', e.clientX - rect.left);
document.body.style.setProperty('--mouseY', e.clientY - rect.top);
document.body.style.setProperty('--text-glitch-scale', (Math.abs(crt.offsetHeight/2 - e.clientY)/crt.clientHeight) * 3 + 0.2) * ((Math.abs(crt.clientWidth/2 - e.clientX)/crt.clientWidth) * 3 + 0.2);
});