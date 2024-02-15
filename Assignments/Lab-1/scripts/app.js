/** the trigger for fading in text**/
const paragraphs = document.querySelectorAll(".section__paragraph");

document.addEventListener("scroll", function(){
    paragraphs.forEach(paragraph =>{
        if (isInView(paragraph)){
            paragraph.classList.add("section__paragraph--visable");
        }
    });
});

/**when text is in view**/
function isInView (element){
    const rect = element.getBoundingClientRect();
    return (rect.bottom > 0 && rect.top < 
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150));
}

/** changing the word product to Intrests **/
var productLink = document.getElementById('products').querySelector('a');
productLink.textContent = productLink.textContent.replace("Product","Interests");
productLink.innerHTML = '<i class="bi bi-basket"></i>'+ productLink.innerHTML;

/**adding a new nav item between about me and contact me**/

    //create new element
    var hrLink = document.createElement('li');
    hrLink.innerHTML = `<a class="dropdown-item" href="#"><i class="fas fa-users"></i>&nbsp;  |&nbsp;  Human Resources</a>`;

    //
    var contactLink = document.querySelector('a[href="contact.html"]').parentNode;
    contactLink.parentNode.insertBefore(hrLink, contactLink);

/**creating a fixed nav bar at the bottom of the page**/

    // Create navbar element
    var navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-dark', 'bg-dark', 'fixed-bottom');

    // Create container for navbar contents
    var container = document.createElement('div');
    container.classList.add('container-footer');

    // Create copyright statement
    var copyright = document.createElement('span');
    var currentDate = new Date().getFullYear();
    copyright.textContent = '\u00A9 ' + currentDate + ' Francisco Gonzalez Moreno';

    // Apply white color to text
    copyright.style.color = 'white';

    // Append copyright statement to container
    container.appendChild(copyright);

    // Append container to navbar
    navbar.appendChild(container);

    // Append navbar to the body
    document.body.appendChild(navbar);

/**creating a contact form for users**/
document.addEventListener('DOMContentLoaded',function(){
    console.log("1");
    
    $("contactForm").submit(function(event){
        console.log("2");

        event.preventDefault(); // Prevent default form submission behavior
    
        // Get form data
        var formData = new FormData("contactForm");
        var formDataObject = {};
        formData.forEach(function(value, key) {
            formDataObject[key] = value;
        });
    
        // Log form data to console
        console.log(formDataObject);
    
        // Start timer to redirect after 5 seconds
        setTimeout(function() {
            window.location.href = "index.html"; // Redirect to Home Page
        }, 5000);
    });
});

var navigationBar = document.querySelector('.navigation-bar');
var lastScrollTop = 0;
    
// Function to handle scroll events
function handleScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

   // If scrolling down
    if (scrollTop > lastScrollTop) {
        // Decrease opacity gradually
        navigationBar.style.opacity = Math.max(0, 1 - scrollTop / 300); // Adjust 200 to change the speed
    } else {
        // If scrolling up, make the navigation bar fully visible
        navigationBar.style.opacity = 1;
    }
    
    // Update last scroll position
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
    
// Listen for scroll events
window.addEventListener('scroll', handleScroll);
    