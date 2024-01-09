jQuery(document).ready(function ($) {
  var form = $('[name="mainForm"]'); // add you form name "if you can set id for your form you can write your form id"
  var numberInput = $("#form-field-phoneNumberMain"); // add your form input number id
  var submitButton = $("#submit-form-button"); // add your button id
  var errorMessage = $("<div>").css("color", "red").attr("id", "errorMessage"); // i create error message tag in this code but if you can create in your wordpress form just write id

  numberInput
    .attr("maxlength", "11")
    .attr("pattern", "09[0-9]{9}")
    .on("input", function () {
      $(this).val($(this).val().slice(0, 11)); // Limit input to 11 characters
      validateInput();
    });

  numberInput.on("wheel", function (e) {
    e.preventDefault();
  });

  numberInput.on("keydown", function (e) {
    var keysToDisable = [38, 40]; // Up and down arrow key codes
    if (keysToDisable.indexOf(e.which) !== -1) {
      e.preventDefault();
    }
  });

  form.on("submit", function (e) {
    if (numberInput.val().length !== 11) {
      e.preventDefault(); // Prevent form submission
      if ($("#errorMessage").length === 0) {
        submitButton.after(errorMessage.text("number must be 11 number"));
      } else {
        errorMessage.text("number must be 11 number");
      }
    } else if (!/^09/.test(numberInput.val())) {
      e.preventDefault(); // Prevent form submission
      if ($("#errorMessage").length === 0) {
        submitButton.after(
          errorMessage.text("your number must be start with 09")
        );
      } else {
        errorMessage.text("your number must be start with 09");
      }
    }
  });

  function validateInput() {
    if (
      /09[0-9]{9}/.test(numberInput.val()) &&
      numberInput.val().length === 11
    ) {
      errorMessage.remove(); // Remove error message when input is valid
      submitButton.prop("disabled", false); // Enable the button
      submitButton.css({
        "background-color": "",
        color: "",
        cursor: "auto",
      }); // Reset button styles
    } else {
      submitButton.prop("disabled", true); // Disable the button
      submitButton.css({
        "background-color": "gray",
        color: "black",
        cursor: "not-allowed", // Change cursor style
      }); // Change button styles
    }
  }
});
