/**** NAVBAR ANIMACE */
    window.addEventListener('scroll', function() {
      var navbar = document.querySelector('.navbar');
      var modryPruh = document.querySelector('.modry-pruh-navbar');
      var navbarOdkazy = document.querySelector('.navbar-odkazy');

      if (window.scrollY > 100) {
        navbar.style.display = 'block';
        navbar.style.top = '0px';
        modryPruh.style.top = '0';
        navbarOdkazy.style.bottom = '60px';
        navbarOdkazy.style.marginTop = '30px'; 
      } else {
        navbar.style.display = 'none';
        navbar.style.top = '-80px';
        modryPruh.style.top = '175px';
        navbarOdkazy.style.marginTop = '290px'; 
      }
    });


    /**** LOGO ANIMACE v navbaru */

    window.addEventListener('scroll', function() {
      var logo = document.querySelector('.logo');
      var bilipruh = document.querySelector('.bily-pruh-navbar')

      if (window.scrollY > 150) {
        logo.style.opacity = '1';
        bilipruh.style.opacity = '1';
      } else {
        logo.style.opacity = '0'; 
        bilipruh.style.opacity = '0';
      }
    });

    document.querySelector('.logo').addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelector('.logo1').addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });



/*** Active classy a odkazy */
var odkazy = document.querySelectorAll('.navbar-odkazy a');

odkazy.forEach(function(odkaz) {
  odkaz.addEventListener('click', function(e) {
    e.preventDefault();

    var cilovyId = this.getAttribute('href');
    var cilovyElement = document.querySelector(cilovyId);
    
    // Přidání třídy 'active' na kliknutý odkaz
    odkazy.forEach(function(odkaz) {
      odkaz.classList.remove('active');
    });
    this.classList.add('active');
    
    // Posunutí stránky na cílový element
    window.scrollTo({
      top: cilovyElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

var menuItems = document.querySelectorAll('.menu li a');
  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      var menuToggle = document.getElementById('menu-toggle');
      menuToggle.checked = false; // Skryje menu
    });
  });






ScrollReveal({
  reset: true,
  easing: 'ease-in-out',
  duration: 1000,
  delay: 400
});

ScrollReveal().reveal('#onas', {delay: 500, distance: "60px"});
ScrollReveal().reveal('.o-nas-text', {delay: 500, origin: "left",distance: "200px" });

ScrollReveal().reveal('#sluzby', {delay: 500, distance: "60px"});
ScrollReveal().reveal('.sluzby-text', {delay: 500, origin: "left",distance: "200px" });

ScrollReveal().reveal('#kontakt', {delay: 500, distance: "60px"});
ScrollReveal().reveal('.phonekontakt', {delay: 500, origin: "left",distance: "200px" });
ScrollReveal().reveal('.mailkontakt', {delay: 500, origin: "left",distance: "200px" });

ScrollReveal().reveal('h2', {delay: 500, origin: "left",distance: "200px" });


