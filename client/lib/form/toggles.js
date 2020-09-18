const form = document.querySelector("form");

//Grab all the divs except the last one
const fields = form.querySelectorAll("div:not(:last-of-type)");

//We need to separate out the 'special' from the 'regular' fields
//TODO: Write a filter that will return out anything that does not have a data-status attribute (HINT: Use hasAttribute("data-status"))

//Using fields write a filter (can't use .filter b/c need an array)
//predicate function returns t/f
const regularFields = [...fields].filter(
  (field) => !field.hasAttribute("data-status")
);

export default () => {
  console.log(fields, regularFields);
};
