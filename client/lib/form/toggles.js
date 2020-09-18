const form = document.querySelector("form");

//Grab all the divs except the last one
const fields = form.querySelectorAll("div:not(:last-of-type)");

//We need to separate out the 'special' from the 'regular' fields
//Using fields write a filter (can't use .filter b/c need an array)
//predicate function returns t/f
const regularFields = [...fields].filter(
  (field) => !field.hasAttribute("data-status")
);

export default () => {
  console.log(fields, regularFields);
};
