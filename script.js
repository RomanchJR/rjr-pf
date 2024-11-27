(function ($) {
  $(document).ready(function () {
      $('#contactForm').on('submit', function (e) {
          e.preventDefault(); // Prevent default form submission

          const formData = $(this).serialize(); // Serialize form data

          $.ajax({
              url: 'sendmail.php', // Backend script
              type: 'POST',
              data: formData,
              success: function (response) {
                  if (response.trim() === "success") {
                      $('#responseMessage').html('<p style="color: green;">Message sent successfully!</p>');
                      $('#contactForm')[0].reset(); // Reset the form
                  } else if (response.trim() === "invalid") {
                      $('#responseMessage').html('<p style="color: orange;">Please fill all fields correctly.</p>');
                  } else {
                      $('#responseMessage').html('<p style="color: red;">An error occurred. Please try again.</p>');
                  }
              },
              error: function () {
                  $('#responseMessage').html('<p style="color: red;">Failed to send the message. Check your connection.</p>');
              }
          });
      });
  });
})(jQuery);
