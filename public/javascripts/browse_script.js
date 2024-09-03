document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      console.log('Scrolling...');  // This should appear in the console when you scroll
      var header = document.getElementsByClassName('header')[0];  // Select the first element with the class 'header'

      if (header) {  // Ensure the element exists
        if (window.scrollY > 0) {
          header.style.backgroundColor = '#0c0c0c';  // Change to black or any color you prefer
        } else {
          header.style.backgroundColor = 'transparent';  // Change back to transparent
        }
    } else {
        console.error('Header element with class "header" not found!');
    }
    });
});
