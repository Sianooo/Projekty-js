document.querySelectorAll('.floating-label').forEach(label => {
    const chars = label.textContent.split('');
    label.innerHTML = chars.map(c => `<span>${c}</span>`).join('');
  });
  
  document.querySelectorAll('.input-wrapper input').forEach(input => {
    const animate = (spans, up) => {
      const arr = up ? spans : [...spans].reverse();
      arr.forEach((span, i) => {
        setTimeout(() => {
          span.style.transform = up ? 'translateY(-20px)' : 'translateY(0)';
          span.style.opacity = up ? '1' : '0.5';
        }, i * 100);
      });
    };
  
    input.addEventListener('focus', () => {
      const spans = input.nextElementSibling.querySelectorAll('span');
      animate(spans, true);
    });
  
    input.addEventListener('blur', () => {
      if (!input.value) {
        const spans = input.nextElementSibling.querySelectorAll('span');
        animate(spans, false);
      }
    });
  });
  