const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }
  
  const form = document.querySelector('form')
  const inputName = document.querySelector('input[name="nome"]')
  const inputEmail = document.querySelector('input[name="email"]')
  
  let isValidForm = false
  
  const resetInput = (elem) => {
    elem.classList.remove('invalid')
    elem.nextElementSibling.classList.add('error-hidden')
  }
  
  const invalidateElem = (elem) => {

    elem.nextElementSibling.classList.remove('error-hidden')
    isValidForm = false
  }
  
  const validateInput = () => {
    isValidForm = true
    if (!inputName.value) {
      invalidateElem(inputName)
    }
  
    if (!isValidEmail(inputEmail.value)) {
      invalidateElem(inputEmail)
    }
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateInput()
  
    if (isValidForm) {
      alert('Cadastro realizado com sucesso!')
      location.reload();
    }
  })
  
  inputName.addEventListener('input', () => {
    resetInput(inputName)
  })
  
  inputEmail.addEventListener('input', () => {
    resetInput(inputEmail)
  })
//slider//
  let slideIndex = 0;

  function showSlides() {
      const slidesContainer = document.querySelector('.slides');
      
      slideIndex++;
      
      const translateValue = -slideIndex * 100 + '%';
      slidesContainer.style.transform = 'translateX(' + translateValue + ')';
      
      if (slideIndex >= 3) {
          slideIndex = 0;
          setTimeout(() => {
              slidesContainer.style.transition = 'none';
              slidesContainer.style.transform = 'translateX(0)';
          }, 500);
          
          setTimeout(() => {
              slidesContainer.style.transition = 'transform 0.5s ease-in-out';
          }, 600);
      }
  }

  setInterval(showSlides, 3000);