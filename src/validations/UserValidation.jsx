
const UserValidation = (values) => {
  const errors = {};
  if (!values.name || values.name === "") {
    errors.name = "Nama harus diisi";
  }

  if (!values.product_category_id || values.product_category_id === "") {
    errors.product_category_id = "product_category_id harus dipilih";
  }
  if (!values.product_id || values.product_id === "") {
    errors.product_id = "product_id harus dipilih";
  }
  if (!values.image_link || values.image_link === "") {
    errors.image_link = "image_link harus diisi";
  }

  return errors;
};

export default UserValidation;
