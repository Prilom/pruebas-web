$(document).ready(function() {
    $('#test-form').submit(function(event) {
      event.preventDefault();
      var formData = $(this).serialize();
      $.ajax({
        type: 'POST',
        url: 'guardar_respuestas.php',
        data: formData,
        success: function(response) {
          $('#resultado').html(response);
        }
      });
    });
  });
  