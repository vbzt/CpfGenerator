import ValidateCpf from "./validaCpf.js";

class GenerateCPF{
 

  generateNumbers(){
    let nums = ''
    for(let i = 1; i <= 9; i++) nums += Math.floor(Math.random() * 9) + 1;
    return nums
  }

  generateCpf(){
    const validateCpf = new ValidateCpf(this.generateNumbers()).generateFullCpf()
    return this.formatCpf(validateCpf)
  }

  formatCpf(cpf){
    let cpfFormatado = cpf.slice(0, 3).join('') + '.';
    cpfFormatado += cpf.slice(3, 6).join('') + '.';
    cpfFormatado += cpf.slice(6, 9).join('') + '-';
    cpfFormatado += cpf.slice(9).join('');
    return cpfFormatado
  }
}

document.querySelector('button').addEventListener('click', e => {
  const qnt = document.querySelector('select').value;
  const result = document.querySelector('.result');
  result.innerHTML = '';

  const title = document.createElement('p');
  title.textContent = 'CPFs gerados:';
  result.appendChild(title);

  for (let i = 0; i < qnt; i++) {
      const cpf = new GenerateCPF().generateCpf();
      appendCpf(cpf);
  }

  result.style.display = 'flex';
});


function appendCpf(cpf) {
  const result = document.querySelector('.result');
  const p = document.createElement('p');
  p.textContent = cpf;
  result.appendChild(p);
}

