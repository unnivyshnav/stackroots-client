// Validation Function
function validation(values) {
  //values = formValues (useState)
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.fullname) {
    errors.username = "Username is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password =
      "Password is too short. Password length should be between 8-20 characters ";
  } else if (values.password.length > 20) {
    errors.password =
      "Password is too long. Password length should be between 5-8 characters";
  }
  return errors;
}

export default validation;
