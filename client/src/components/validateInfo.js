export default function validateInfo(values) {
    let errors = {};
  
    if (!values.FirstName.trim()) {
      errors.FirstName = 'FirstName required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.Email) {
      errors.Email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.Email)) {
      errors.Email = 'Email address is invalid';
    }
    if (!values.Password) {
      errors.Password = 'Password is required';
    } else if (values.Password.length < 6) {
      errors.Password = 'Password needs to be 6 characters or more';
    }
  
    // if (!values.Password2) {
    //   errors.password2 = 'Password is required';
    // } else if (values.password2 !== values.password) {
    //   errors.password2 = 'Passwords do not match';
    // }
    return errors;
  }
  