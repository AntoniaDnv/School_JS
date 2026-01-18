function focused() {
  let elements = [...document.querySelectorAll('div div')];

  elements.forEach(element => {
    element.setAttribute('tabindex', '0');

    element.addEventListener('focus', () => {
      element.classList.add('focused');
    });

    element.addEventListener('blur', () => {
      element.classList.remove('focused');
    });
  });
}
