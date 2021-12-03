window.addEventListener('load', () => {
  const left = document.querySelector('.toggler__prev');
  const right = document.querySelector('.toggler__next');
  const slider = document.querySelector('.slider__slide');
  const slides = document.querySelector('.response');
  const toggler = document.querySelector('.toggler__radios');

  let blockWidth = 0;
  let count = 0;

  let inputs = Array.from(toggler.childNodes).filter((item) => item.tagName === 'INPUT');
  inputs[0].checked = true;

  
  right.addEventListener('click', () => {
    if (count < slider.children.length - 1) {
      count++;
      inputs[count].checked = true;
      blockWidth -= slides.clientWidth + 40;
      slider.style.transform = `translateX(${blockWidth}px)`;
    }
  })

  left.addEventListener('click', () => {
    if (count > 0) {
      count--;
      inputs[count].checked = true;
      blockWidth += slides.clientWidth + 40;
      slider.style.transform = `translateX(${blockWidth}px)`;
    }
  })
})
