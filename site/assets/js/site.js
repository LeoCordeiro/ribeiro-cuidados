(function () {
  window.addEventListener('load', function () {
    document.documentElement.classList.add('rc-pronto');
  });

  var cabecalho = document.querySelector('header');
  if (cabecalho) {
    var marcar = function () {
      cabecalho.classList.toggle('rc-rolou', window.scrollY > 8);
    };
    marcar();
    window.addEventListener('scroll', marcar, { passive: true });
  }

  var video = document.getElementById('sobre-video-trigger');
  var videoId = '';
  if (video && videoId) {
    video.querySelector('.play-button').style.display = 'flex';
    video.style.cursor = 'pointer';
    video.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3';
      iframe.title = 'Vídeo institucional da Ribeiro Cuidados';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.className = 'w-full h-full absolute inset-0';
      iframe.style.border = '0';
      video.innerHTML = '';
      video.appendChild(iframe);
      video.style.cursor = 'default';
    }, { once: true });
  }

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var observador = new IntersectionObserver(function (entradas) {
    var ordem = 0;
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) return;
      entrada.target.style.setProperty('--rc-atraso', Math.min(ordem++, 5) * 90 + 'ms');
      entrada.target.classList.add('rc-visivel');
      observador.unobserve(entrada.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.15 });

  document.addEventListener('focusin', function (e) {
    var bloco = e.target.closest && e.target.closest('.rc-revelar:not(.rc-visivel)');
    if (bloco) {
      bloco.classList.add('rc-visivel');
      observador.unobserve(bloco);
    }
  });

  function preparar(seletor, classe) {
    document.querySelectorAll(seletor).forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
      el.classList.add(classe);
      observador.observe(el);
    });
  }

  preparar([
    '#sobre .grid > div',
    '#pain-points .text-center', '#pain-points .grid > div',
    '#diferenciais .grid > div:first-child > :not(ul)', '#diferenciais ul > li',
    '#diferenciais .lg\\:grid-cols-2 > div:last-child > *',
    '#servicos .text-center', '#servicos .grid > div',
    '#compromissos .text-center', '#compromissos .grid > div', '#compromissos .mt-12',
    '#como-funciona .text-center', '#como-funciona .grid > div', '#como-funciona .mt-16',
    '#faq .text-center', '#faq details',
    'footer .grid > div'
  ].join(','), 'rc-revelar');
  preparar('#como-funciona .grid > div > .absolute', 'rc-linha');
})();
