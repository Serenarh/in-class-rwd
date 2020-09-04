const nav = document.querySelector('nav')

document.querySelector('.fa-hamburger').addEventListener('click',
// Callback function
  () => {
    // Short-circuit OR operator
    nav.classList.replace('is-collapsed', 'is-expanded') || nav.classList.replace('is-expanded', 'is-collapsed')
  })
