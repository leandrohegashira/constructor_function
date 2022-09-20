

function Dom(seletor){

  const elementList = document.querySelectorAll('li')

  this.element = elementList


  this.addClass = function(classe){
    elementList.forEach((e) => {
      e.classList.add(classe)
    })
  }

  this.removeClass = function(classe){
    elementList.forEach((e) => {
      e.classList.add(classe)
    })
  }
}

const li = new Dom('li')
li.addClass('ativo')
li.removeClass('ativo')

