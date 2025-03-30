var $desmarcaTudo = document.querySelector('#desmarca-tudo')
var $tdTotalCursos = document.querySelector('.js-total-de-cursos')
var $tdTotalDeHoras = document.querySelector('.js-total-de-horas')
var $buttonConfirmar = document.querySelector('.js-botao-matricula')

var totalHoras = 0
var totalCursos = 0

$desmarcaTudo.addEventListener("click", () => {
  totalCursos = 0;
  totalHoras = 0;

  document.querySelectorAll('input[name="curso"]').forEach(checkbox => {
    checkbox.checked = false;
  });

  $tdTotalDeHoras.textContent = totalHoras + 'h';
  $tdTotalCursos.textContent = totalCursos + ' curso(s)';
});


function adicionaCurso(checkbox){
  
  if(checkbox.checked){
    totalCursos++
    totalHoras += parseInt(checkbox.value)
  }
  else {
    totalCursos--
    totalHoras -= parseInt(checkbox.value)
  }

  $tdTotalDeHoras.textContent = totalHoras + 'h'
  $tdTotalCursos.textContent = totalCursos + ' curso(s)'

}

$buttonConfirmar.onclick = () => {
  if(totalCursos === 0) {
    alert('Nenhum curso selecionado')
  } else {
    alert('Matricula confirmada nos cursos!')
    window.location.href = 'index.html'
  }
}