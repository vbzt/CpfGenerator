class ValidateCpf{
  constructor(cpf){
    this.cpf = cpf
  }

  validateCharacters(){
    if(!this.cpf || typeof(this.cpf) !== 'string'){
      console.log('Cpf Invalido!')
      return false
    }
    return true
  }

  cleanCpfArray(){
    let cleanCpf = this.cpf.replace(/\D+/g, '');
    let cleanCpfArray = Array.from(cleanCpf)
    cleanCpfArray = cleanCpfArray.map((val) => Number(val))
    
    if(cleanCpfArray.length !== 9){
      console.log('Cpf invalido')
      return
    }
    return cleanCpfArray
  }

  firstDigit(){
    let cpfArray = this.cleanCpfArray()
    let i = 10
    let total = cpfArray.reduce((sum, val) =>{

      sum += val * i
      i--

      return sum
    },0)
    let result = 11 - (total % 11)
    result = result > 9 ? 0 : result
    return result
  }

  secondDigit(){
    let cpfArray = this.cleanCpfArray()
    cpfArray.push(this.firstDigit())
    let i = 11
    let total = cpfArray.reduce((sum, val) =>{

      sum += val * i
      i--

      return sum
    },0)
    let result = 11 - (total % 11)
    result = result > 9 ? 0 : result
    return result
  }

  generateFullCpf(){
    const fullCpf = this.cleanCpfArray()
    fullCpf.push(this.firstDigit(), this.secondDigit())
    return fullCpf
  }
}

export default ValidateCpf
