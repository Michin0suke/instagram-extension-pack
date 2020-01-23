const interval = setInterval(() => {
  if (document.querySelector('.RnEpo.Yx5HN')) {
    document.querySelector('.RnEpo.Yx5HN').remove();
    setTimeout(() => document.body.style.overflow = 'visible', 50);
    clearInterval(interval);
  }
}, 100);