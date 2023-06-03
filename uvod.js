
    window.addEventListener('scroll', function() {
      var navbar = document.querySelector('.navbar');
      var modryPruh = document.querySelector('.modry-pruh-navbar');
      var navbarOdkazy = document.querySelector('.navbar-odkazy');

      if (window.scrollY > 0) {
        navbar.style.top = '0';
        modryPruh.style.top = '0';
        navbarOdkazy.style.bottom = '60px';
        navbarOdkazy.style.marginTop = '30px'; 
      } else {
        navbar.style.top = '-80px';
        modryPruh.style.top = '175px';
        navbarOdkazy.style.marginTop = '290px'; 
      }
    });


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