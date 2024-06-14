document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("form")
    
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault() // Prevents the default form submission behavior
        
        // Display a simple confirmation message
        alert("Thank you for your message. We will get back to you soon!")
        
        // Optionally, reset the form fields
        contactForm.reset()
    })
})
