// MAP //
// const lista =[
//     {
//         marca:'Uno',
//         idade: '1995',
//         cor: 'Azul'
//     },
//     {
//         marca:'Chevete',
//         idade: '1992',
//         cor: 'Branco'
//     },
//     {
//         marca:'Ferrari',
//         idade: '2000',
//         cor: 'Branco'
//     },
//     {
//         marca:'BMW',
//         idade: '1998',
//         cor: 'vermelho'
//     },
//     {
//         marca:'Fusca',
//         idade: '1996',
//         cor: 'Preto'
//     },

    
// ]

// const converterObjeto = (objeto)=>{
//     return{
//         //sprant//
//     ...objeto,
//       carro:`${objeto.ano} + ${objeto.cor} `

//     }
    
    
// }

// console.log(lista.map(converterObjeto))

/////////////////////////////////////////////
//Exemplo de for e forEach//

// for(let i=0;i < lista.length; i++ ){
//     console.log(lista[i])
// }
// let soma =0
// lista.forEach((objeto) => {
//     soma+=objeto.idade
// })
// console.log('Soma ',soma)
// const somaIdade = (objeto) =>{
//     soma += objeto.idade
// }
// lista.forEach(somaIdade);
// console.log('soma ',soma)
//--------------------------------//

//váriáveis //

// let idade = 38
// console.log(idade)


// let altura = 170 
// console.log(altura)

// let endereco = "rua martins de carvalho"
// console.log(endereco)

// let bairro = 'Bom jardim'
// console.log(bairro)

//Const (resultado não pode ser alterado) diferente de Let conforme exemplo abaixo//
//  let meuIngresso= 30;
//      meuIngresso=20
//      console.log(meuIngresso)
//--------------------------------//

// tipos de valores

//   let nome = 'joão'; //string//
//   let idade= 38 ;   //number//
//   let casado= 'casado' ;// boolean//
//   console.log (`meu nome é ${nome} tenho ${idade}  de idade e sou muito bem ${casado} ` )
  
//---------------------------------//

//Tipos de objeto => Array e Function//
// let camelo = { } //objeto vazio // 

// let familia= {
//     pai: 'joão',
//     mae: 'Maria',
//     casamento: 27
// }
 
// console.log(familia)

//----------------------------//

// Array => Conjunto de dados que pode ser acessado por um indice.//

// let campeonato = [ 
//     'Fortaleza',
//       10,
//       true
// ]
// console.log(campeonato.length)
// console.log(campeonato)

//---------Funções----------//

//Fuction// //nomear função VERBO + SUBSTANTIVO  (ex: resetarSenha, mudaCor)
// let mudarCor = 'verde'
// function novaCor(cor){
//       mudarCor= cor 
// }
// novaCor( 'preto' )
// console.log(mudarCor)

// let meuTime = 'Fortaleza'
// function novoTime(){
// meuTime=` Meus times são flamengo e Fortaleza `
// }
// novoTime()
// console.log(meuTime)

////////////////////////////////////////////////
// Tipos de funções //
// 1ª Realiza uma tarefa e não devolve nada //
// function meuCelular(){
//     console.log('samsung')
// }
//    meuCelular()

//2ª Realiza a tarefa e retorna algo //
// function adicionarValor(valor){
//     return valor * 5
// }
// // console.log(adicionarValor(5))
// let resultado = adicionarValor(5)
// console.log(resultado)

// Operadores lógicos ou aritiméticos//

 // +,-,*,/, **
 //++ , --  incremento ou decremento

//  let salario = 100
//  console.log(salario--) // efetuado adição após operação//
//  console.log(salario)  // só irá apresentar valo aqui //
//----------------------------------------------------------//

// Operadores de Atribuição (=), (+=),(-=) //

// let valorTecladoGamer = 100
// valorTecladoGamer += valorTecladoGamer
// console.log(valorTecladoGamer) 

// let valorTecladoGamer = 100
// valorTecladoGamer -= valorTecladoGamer
// console.log(valorTecladoGamer) 

//-------------------------------------------------------------//

//Operadores de de igualdade//
//Igualdade estrita ou absolutamente igual//
// console.log(1===1) //true
// console.log("1"===1 ) //false pois tem uma string// 
    // ou 
// console.log(1==1)     
// console.log('1'==1) //Aqui a string é ignorada//    

//--------------------------------------------------------------//

//Operadores Terário// Utilizado para não precisar construir vários If ao mesmo tempo//
// let time = 100
// let campeao = time >= 100 ?  'vencedor':'perdedor' //time vencedor//
// console.log(campeao )

//--------------------------------------------------------------//
// Operadores Lógicos e && (And)  
//* Retorna True se as duas operações for satisfatória *//
// console.log( true && true) //retorna verdadei//
// console.log( true && false) //retorna falso///

    //  let aluno = true 
    //  let alunoAprovado = false
    //  let avaliacao= aluno && alunoAprovado 
    //  console.log(avaliacao)

// Operadores Lógicos || (OU)
//* Retorna True se uma das operações for satisfatória, avalia sempre a primeira condição *//
// console.log( true && false) //retorna verdadei//
// console.log( false && false) //retorna falso///

    // let aluno = true 
    // let alunoAprovado = false
    // let avaliacao= aluno || alunoAprovado 
    // console.log(avaliacao)

// Operadores Lógicos != (NOT)
//* Tem o papel de negação na operações *//
    
    // let aluno = true
    // let alunoAprovado = false
    // let avaliacao1= aluno || alunoAprovado  //retornará true pois o != inverte o false//
    // let avaliacao= aluno != alunoAprovado  //retornará true pois o != inverte o false//
    // console.log(avaliacao)

//--------------------------------------------------------------//
  
 //* Comparações lógicas com valores não Boolean *//
 // Falsy: " ",undefined, Null, 0, false, Nan ou not a number.
 // Trufhy: São todos os que não estão acima;//
 //exemplo//                              
//  false || true //true                 
//  false || 1 // 1
//  false || 'Rafael' //Rafael
 
//  let time1 = 'fortaleza'
//  let time2 = 'flamengo'
//  let timecampeao = time1||time2
//  console.log(timecampeao)

//------------------------------------------------------------//

// let a = "joão"
// let b = "paulo"
// let c = a
// a=b
// b=c
 
//  console.log(a)
//  console.log(b)
//-----------------------------------------------------------//
 
      //* If, If else ou else *//


    //   let carro = 2009

    //   if(carro > 2015){
    //     console.log('meu carro é novo')
    //   }
    //   else if(carro  > 2011 ){
    //         console.log('meu carro é semi-novo')
    //   }
    //   else{  
    //     console.log('meu carro é velho')
    //   }

    // let carro 
    // carro = 'semi-novo'// Substitui o if e o else //
    // switch(carro){
    //     case 'novo':
    //     console.log(`Meu carro é ${carro} `)
    //     break;

    //     case 'semi-novo':
    //     console.log(`Meu carro é ${carro} `)
    //     break;

    //     case 'velho':
    //     console.log(`Meu carro  é ${carro}`)
    //     break;

    //     default: 
    //     console.log('carro deconhecido')   
    // }
    
    //------------------------------------------------//
    // Revisão variável //
    // let (Palavra para declarar uma variável)
    // roupa (nome dá variável)
    // = (Atribuição da variável)
    // camiseta (Atribuição)

    // let roupa = 'camiseta' // camiseta é o valor da variável //
    // alert(`Preferi comprar ${roupa} ?`)