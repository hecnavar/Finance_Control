import { useState, useEffect } from 'react';

const useFormValidation = (initialValues, validationSchema, onSubmit) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = (values) => {
    let errors = {};
    if (validationSchema) {
      for (const name in validationSchema) {
        const rules = validationSchema[name];
        if (rules.required && !values[name]) {
          errors[name] = rules.required;
        }
        if (rules.minLength && values[name] && values[name].length < rules.minLength.value) {
          errors[name] = rules.minLength.message;
        }
        if (rules.isNumber && values[name] && isNaN(values[name])) {
          errors[name] = rules.isNumber;
        }
      }
    }
    return errors;
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const resetForm = () => {
    setValues(initialValues || {});
    setErrors({});
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      onSubmit(values, resetForm);
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting, onSubmit, values, resetForm]);

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useFormValidation;