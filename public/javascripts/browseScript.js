document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var header = document.getElementsByClassName('header')[0]; 

      if (header) {  
        if (window.scrollY > 0) {
          header.style.backgroundColor = '#0c0c0c'; 
        } else {
          header.style.backgroundColor = 'transparent';
        }
    } else {
        console.error('Header element with class "header" not found!');
    }
    });
});


