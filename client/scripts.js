//Destructure a specific key in the imported ESModuel Object
import { nav, toggles, validation } from "./lib/index.js";

nav();

//TODO Only invoke 'validation' if we're on the form page!
switch (location.pathname) {
  case "/form/":
    toggles();
    validation();
}
