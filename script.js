// let questionNumber = parseInt(prompt('Qual questão você quer?'))
// switch (questionNumber) {
//   case 1:
//     q1()
//     break
//   case 2:
//     q2()
//     break
//   case 3:
//     q3()
//     break
//   case 4:
//     q4()
//     break
//   case 5:
//     q5()
//     break
//   case 6:
//     q6()
//     break
//   case 7:
//     q7()
//     break
//   case 8:
//     q8()
//     break
// }

function inserirHTML(text) {
  document.body.innerHTML += text
}

function botaoVoltar() {
  let button = document.createElement('button')
  button.classList.add('leaveButton')
  button.innerHTML = `Voltar para as questões`
  button.addEventListener('click', () => {
    document.body.classList.remove('numeros')
    questions()
  })
  document.body.appendChild(button)
}

function q1() {
  document.body.innerHTML =
    '<h3>1- Crie uma função que receba 1 parâmetro uma temperatura em Celsius. Calcule e mostre as temperaturas em Kevin e em Fahrenheit.</h3>'

  function celsiuToKelvin(celsius) {
    let kevin = celsius + 273.15
    let farheit = celsius * 1.8 + 32
    return { kevin, celsius, farheit }
  }
  let temperaturas = celsiuToKelvin(
    parseFloat(prompt('Digite uma temperatura em celsius: '))
  )
  inserirHTML(`Temperatura em Kevin: 
  ${temperaturas.kevin}<br> Temperatura em Fahrenheit: ${temperaturas.farheit}`)

  botaoVoltar()
}

function q2() {
  document.body.innerHTML =
    '<h3>2 - Crie uma função que receba 2 valores inteiros (inicio e fim) e imprimi os valores de inicio até fim. Caso o valor de fim for menor ou igual a inicio, mostrar uma mensagem de erro, valores inválidos.</h3>'
  let ul = document.createElement('ul')
  document.body.appendChild(ul)
  document.body.classList.add('numeros')
  function interval(start, end) {
    if (start >= end) {
      inserirHTML('Valores invalidos')
    } else {
      for (; start <= end; start++) {
        ul.innerHTML += `<li>${start}</li>`
      }
    }
  }

  interval(
    parseInt(prompt('Digite o valor inical: ')),
    parseInt(prompt('Digite o valor final: '))
  )
  botaoVoltar()
}

function q3() {
  document.body.innerHTML =
    '<h3>3 - Crie uma função que recebe como parâmetros nome, nota1, nota2 e nota3. Se as 3 notas do aluno estiverem no intervalo de 0 a 10, calcular a média, mostrar o nome do aluno e se está aprovado ou não (média 6). Senão exibir notas inválidas.</h3>'
  function notas(name, nota1, nota2, nota3) {
    if (nota1 >= 0 && nota2 >= 0 && nota3 >= 0) {
      let media = (nota1 + nota2 + nota3) / 3
      console.log(media)
      return media >= 6
        ? `${name} sua media foi: ${media}<br>E você foi APROVADO`
        : `${name} sua media foi: ${media}<br>E voce foi REPROVADO`
    } else {
      return 'Notas invalidas'
    }
  }
  inserirHTML(
    notas(
      prompt('Qual o seu nome?: '),
      parseFloat(prompt('Informe a nota 1: ')),
      parseFloat(prompt('Informe a nota 2: ')),
      parseFloat(prompt('Informe a nota 3: '))
    )
  )
  botaoVoltar()
}

function q4() {
  document.body.innerHTML =
    '<h3>4 - Crie uma função que receba como parâmetros 4 valores numéricos, calcule o quadrado de cada um, some todos e mostre o resultado.</h3>'
  function quadrado(number1, number2, number3, number4) {
    return number1 ** 2 + number2 ** 2 + number3 ** 2 + number4 ** 2
  }

  inserirHTML(
    quadrado(
      parseInt(prompt('Digite o primeiro numero: ')),
      parseInt(prompt('Digite o segundo numero: ')),
      parseInt(prompt('Digite o terceiro numero: ')),
      parseInt(prompt('Digite o quarto numero: '))
    )
  )
  botaoVoltar()
}

function q5() {
  document.body.innerHTML =
    '<h3>5 - Crie uma função que receba como parâmetros 4 valores números, calcule o quadrado de cada um, Se o valor resultante do quadrado do terceiro for >= 1000, imprima-o e finalize. Caso contrário, imprima os valores lidos e seus respectivos quadrados.</h3>'
  function quadrado(number1, number2, number3, number4) {
    let quadrado1 = number1 ** 2
    let quadrado2 = number2 ** 2
    let quadrado3 = number3 ** 2
    let quadrado4 = number4 ** 2

    if (quadrado3 >= 1000) {
      inserirHTML('numero 3 ao quadrado: ' + quadrado3)
    } else {
      inserirHTML(`${number1}^2 = ${quadrado1}<br>`)
      inserirHTML(`${number2}^2 = ${quadrado2}<br>`)
      inserirHTML(`${number3}^2 = ${quadrado3}<br>`)
      inserirHTML(`${number4}^2 = ${quadrado4}`)
    }
  }

  quadrado(
    parseInt(prompt('Digite o primeiro numero: ')),
    parseInt(prompt('Digite o segundo numero: ')),
    parseInt(prompt('Digite o terceiro numero: ')),
    parseInt(prompt('Digite o quarto numero: '))
  )
  botaoVoltar()
}

function q6() {
  document.body.innerHTML =
    '<h3>6 -Crie uma função que receba um número inteiro como parâmetro e mostre uma mensagem indicando se este número é par ou ímpar, e se é positivo ou negativo.</h3>'
  function imParPosNegativo(number) {
    let parImpar = number % 2 == 0
    if (number < 0) {
      inserirHTML(`${number} é negativo e ${parImpar ? 'Par' : 'Impar'}`)
    } else {
      inserirHTML(`${number} é positivo e ${parImpar ? 'Par' : 'Impar'}`)
    }
  }

  imParPosNegativo(parseInt(prompt('Digite um numero')))
  botaoVoltar()
}

function q7() {
  document.body.innerHTML = `<h3>7 - Crie uma função que receba como parâmetro o nome e a idade de um nadador. Exiba o nome dele e sua classificação de acordo com as seguintes categorias:
  <ul>
  <li>Infantil A = 5 a 7 anos </li>
  <li>Infantil B = 8 a 11 anos </li>
  <li>Juvenil A = 12 a 13 anos </li>
  <li>Juvenil B = 14 a 17 anos </li>
  <li>Adultos = Maiores de 18 anos</li>
 </ul>
 </h3>
 `
  function categoriaNadador(name, age) {
    if (age >= 5 && age <= 7) {
      inserirHTML(`${name} é um nadador: infanto A`)
    } else if (age >= 8 && age <= 11) {
      inserirHTML(`${name} é um nadador: infanto B`)
    } else if (age >= 12 && age <= 13) {
      inserirHTML(`${name} é um nadador: Juvenil A`)
    } else if (age >= 14 && age <= 17) {
      inserirHTML(`${name} é um nadador: Juvenil B`)
    } else if (age >= 18) {
      inserirHTML(`${name} é um nadador: Adulto`)
    } else {
      inserirHTML(`${name} não tem a idade minima`)
    }
  }

  categoriaNadador(
    prompt('Digite seu nome: '),
    parseInt(prompt('Digite sua idade: '))
  )
  botaoVoltar()
}

function q8() {
  document.body.innerHTML =
    '8- Converta a função abaixo para arrow function. E faça a chamada de execução da mesma.'

  document.body.innerHTML = `<pre><h5>Original: </h5><code>function mostraIdade(){
      let entrada = parseInt(prompt('Digite seu ano de nascimento: '));     
      let idadeAtual = (new Date().getFullYear()) - entrada;     
      if(idadeAtual < 18){
      document.write('Você é menor de idade, tem apenas \${idadeAtual} anos');
      }else {
      document.write('Você é maior de idade, já possui \${idadeAtual} anos');
      };
      }</code>   
      <h5>Alterado: </h5><pre><code>
      let mostraIdade = () => {
        let entrada = parseInt(prompt('Digite seu ano de nascimento: '));        
        let idadeAtual = (new Date().getFullYear()) - entrada;        
        if(idadeAtual < 18){
        document.write('Você é menor de idade, tem apenas \${idadeAtual} anos');
        }else {
        document.write('Você é maior de idade, já possui \${idadeAtual} anos');
        };
        }
        mostrarIdade()
        </code><pre>`
  let mostrarIdade = () => {
    let entrada = parseInt(prompt('Digite seu ano de nascimento: '))

    let idadeAtual = new Date().getFullYear() - entrada

    if (idadeAtual < 18) {
      inserirHTML(`Você é menor de idade, tem apenas ${idadeAtual} anos`)
    } else {
      inserirHTML(`Você é maior de idade, já possui ${idadeAtual} anos`)
    }
  }
  mostrarIdade()

  botaoVoltar()
}

function questions() {
  document.body.innerHTML = ''
  let arrayFunc = [q1, q2, q3, q4, q5, q6, q7, q8]
  let i = 1
  arrayFunc.forEach(funcaozinha => {
    let button = document.createElement('button')
    button.classList.add('buttons')
    button.innerHTML = `Questão: ${i}`
    button.addEventListener('click', () => {
      funcaozinha()
    })
    document.body.appendChild(button)
    i++
  })
}

questions()
