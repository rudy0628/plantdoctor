'use strict';

//mobile menu
const btnMenu = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnMenu.addEventListener('click', function () {
	headerEl.classList.toggle('nav-open');
});

// smooth scrolling
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(link => {
	link.addEventListener('click', function (e) {
		const href = link.getAttribute('href');

		if (href === '#') {
			e.preventDefault();
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}

		if (href !== '#' && href.startsWith('#')) {
			e.preventDefault();
			const section = document.querySelector(href);
			section.scrollIntoView({ behavior: 'smooth' });
		}

		// close navigation on mobile
		if (link.classList.contains('main-nav-link')) {
			headerEl.classList.toggle('nav-open');
		}
	});
});

// sticky navbar
const sectionEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];

		if (!ent.isIntersecting) {
			document.body.classList.add('sticky');
		}

		if (ent.isIntersecting) {
			document.body.classList.remove('sticky');
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: '-80px',
	}
);
obs.observe(sectionEl);
