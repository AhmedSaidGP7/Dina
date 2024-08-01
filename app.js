document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.bubble');
    const pathSelect = document.getElementById('education-path');

    bubbles.forEach((bubble, index) => {
        bubble.addEventListener('click', () => {
            pathSelect.selectedIndex = index; // Set the dropdown to the bubble's corresponding option
        });
    });
});

document.getElementById('startButton').addEventListener('click', function() {
    var startPage = document.getElementById('startPage');
    var nextPage = document.getElementById('nextPage');

    startPage.classList.add('fade-out');
    nextPage.classList.add('fade-in');
});

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.getElementById('btnLoginPopup'); // Changed this line
const iconClose = document.querySelector('.icon-close')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    console.log('Login button clicked');
    wrapper.classList.add('active-popup');
});


iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

document.addEventListener('DOMContentLoaded', () => {
        // Extract query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const path = urlParams.get('education-path');
    const grade = urlParams.get('grade');
        
        // Placeholder for dynamic content
    document.querySelector('.curriculum ul').innerHTML = `
        <li>${path} - Curriculum Item 1</li>
        <li>${path} - Curriculum Item 2</li>
            <!-- Add more curriculum items based on the path -->
        `;
        
    document.querySelector('.points p').textContent = '0'; // Placeholder for points
        
    document.querySelector('.schedule ul').innerHTML = `
        <li>9:00 AM - ${path} - Subject</li>
        <li>11:00 AM - ${path} - Subject</li>
            <!-- Add more schedule items -->
        `;
    });

    $(document).ready(function(){
        $('.menu-toggle').on('click',function( ) {
            $('.nav').toggleClass('showing');
            $('.nav ul').toggleClass('showing');
        });
        

        $('.post-wrapper').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
  });
        
                    
    });

