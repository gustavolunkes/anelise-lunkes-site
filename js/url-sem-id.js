document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const id = this.getAttribute('href').substring(1);
      const target = document.getElementById(id);

      const menuHeight = document.querySelector('nav').offsetHeight;

      if (target) {
        window.scrollTo({
          top: target.offsetTop - menuHeight,
          behavior: 'smooth'
        });

        // Remove o # da URL
        history.replaceState(null, null, ' ');
      }
    });
  });