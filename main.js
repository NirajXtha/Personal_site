const navbar = document.querySelector('.nav');
const watch = document.createElement('div');

watch.setAttribute('data-scroll-watcher', '');
navbar.before(watch);

const navObserver = new IntersectionObserver((entries) => {
    navbar.classList.toggle('sticking', !entries[0].isIntersecting)
}, {rootMargin: "100px 0px 0px 0px"});

navObserver.observe(watch);

function myFunction(x) {
    x.classList.toggle("change");
  }