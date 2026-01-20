function focused() {
  let elements = [...document.querySelectorAll('div div')];
  
  
  elements.forEach(element => {
    element.setAttribute('tabindex', '0');
    
    element.addEventListener('focusin', () => {
      element.classList.add('focused');
    });

    element.addEventListener('focusout', () => {
      element.classList.remove('focused');
    });
  });
}
