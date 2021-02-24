function variables(value) {
  const url = `https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products`;
  const write = document.querySelector(".load-content");

  if (value == `url`) {
    return url;
  } else if (value == `write`) {
    return write;
  }
}
export default variables;
