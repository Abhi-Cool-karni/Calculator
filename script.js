let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string)
      document.querySelector('input').value = string
    }
      else if (e.target.innerHTML == 'C') {
      string = ""
      document.querySelector('input').value = string
    }
    else {
      // console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string
    }
  })
})

// Todo: Make M+ M- functional and add try catch for error handling