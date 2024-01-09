![Wordpress input type number form validation by Ali Houshangi](https://photos.app.goo.gl/3cfLiRdPaFrzgJnB9)

# Input Number Validation Form (WordPress)

This repository contains a JavaScript code snippet that validates a phone number input field in a WordPress form. The validation ensures that the entered number:

- Consists of 11 characters.
- Begins with '09'.

### Code Overview

#### Technologies Used

- **JavaScript**
- **jQuery**

#### Instructions for Use

1. **Setup**: Insert the provided JavaScript code into your WordPress site. Ensure jQuery is loaded before using this script.

2. **Integration**:

   - Identify your form, number input field, and submit button by their IDs or names.
   - Update the code variables accordingly:
     - `form`: Representing the form element.
     - `numberInput`: Representing the input field for the phone number.
     - `submitButton`: Identifying the submit button.
     - `errorMessage`: Error message container (if not available in your form).

3. **Validation Rules**:
   - The phone number input field is restricted to 11 characters.
   - It must start with '09' followed by 9 additional digits.

#### Validation Logic

- **Input Limitation**: The input is limited to 11 characters.
- **Preventing Unwanted Actions**:
  - Disables mouse wheel scrolling for the number input.
  - Prevents specific key actions (e.g., up and down arrows) on the number input.
- **Form Submission**:
  - Validates the input on form submission.
  - Checks for the correct number length and starting digits ('09').
  - Displays error messages if the input doesn’t meet the criteria.

#### Styling and Interaction

- **Invalid Input**:
  - Disables the submit button and changes its color to gray.
  - Displays an error message when the input is invalid.
- **Valid Input**:
  - Enables the submit button and resets its styles when the input is valid.

### How to Use

1. Clone this repository to your local machine.
2. Copy the JavaScript code into your WordPress site where necessary.
3. Update the code variables as specified to match your form and input field IDs.
4. Test the form with various phone number inputs to observe the validation behavior.

### Contribution

Contributions and suggestions for improvement are welcome! Please feel free to open issues or submit pull requests.
