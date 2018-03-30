function showForm() {
  var form = document.querySelector(".search-form");

  if (form.classList.contains('search-form-active')) {
    form.classList.remove('search-form-active')
  } else {
    form.classList.add('search-form-active')
  }
}

let btn = document.querySelector('.search-btn');
btn.addEventListener('click', showForm);
