function attachGradientEvents() {
   let hoverEl = document.getElementById('gradient');
   let result = document.getElementById('result');

   hoverEl.addEventListener('mousemove', (ev) =>{
    let offx = ev.offsetX;
    let elWidth = ev.target.offsetWidth;
    let res = offx/ elWidth * 100;
    result.textContent = res.toFixed(0) + '%';
   })
}