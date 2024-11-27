$(document).ready(function() {
  $('#contactForm').on('submit', function(e) {
      e.preventDefault();
      
      const form = $(this);
      const formData = form.serialize();
      const responseMessageEl = $('#responseMessage');
      
      // Reset previous messages
      responseMessageEl.html('');
      
      // Basic client-side validation
      const name = form.find('input[name="name"]').val().trim();
      const email = form.find('input[name="email"]').val().trim();
      const message = form.find('textarea[name="message"]').val().trim();
      
      if (!name || !email || !message) {
          responseMessageEl.html('<p style="color: orange;">Please fill all fields correctly.</p>');
          return;
      }
      
      $.ajax({
          url: 'sendmail.php',
          type: 'POST',
          data: formData,
          success: function(response) {
              switch(response.trim()) {
                  case "success":
                      responseMessageEl.html('<p style="color: green;">Message sent successfully!</p>');
                      form[0].reset();
                      break;
                  case "invalid":
                      responseMessageEl.html('<p style="color: orange;">Please fill all fields correctly.</p>');
                      break;
                  default:
                      responseMessageEl.html('<p style="color: red;">An error occurred. Please try again.</p>');
              }
          },
          error: function() {
              responseMessageEl.html('<p style="color: red;">Failed to send the message. Check your connection.</p>');
          }
      });
  });
});