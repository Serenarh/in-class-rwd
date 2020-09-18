//As long as there is a reference to our variable we are taking advantage of closure
const nav = document.querySelector("nav");

export default () => {
  document.querySelector(".fa-hamburger").addEventListener(
    "click",
    //Callback fxn.
    () => {
      //Short-circuit OR operator
      nav.classList.replace("is-collapsed", "is-expanded") ||
        nav.classList.replace("is-expanded", "is-collapsed");
    }
  );
};
