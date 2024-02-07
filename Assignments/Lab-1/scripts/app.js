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
function isInView (elment){
    const rect = elment.getBoundingClientRect();
    return (rect.bottom > 0 && rect.top < 
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150));
}

/** changing the word product to Intrests **/
var productLink = document.getElementById('products').querySelector('a');
productLink.textContent = productLink.textContent.replace("Product", "Interests");
productLink.innerHTML = '<i class="bi bi-basket"></i>' + productLink.innerHTML;

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
    container.classList.add('container-fluid');

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

    // Get the form element
    var form = document.getElementById('contactForm');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form data
    var formData = new FormData(form);
    var formDataObject = {};
    formData.forEach(function(value, key) {
        formDataObject[key] = value;
    });

    // Log form data to console
    console.log(formDataObject);

    // Start timer to redirect after 3 seconds
    setTimeout(function() {
        window.location.href = "index.html"; // Redirect to Home Page
    }, 3000);
    });

