
/* === LETRA A === */

/* var school = {
    "students": [
        {
            "id": 1,
            "name": "Allan",
            "city": "São Paulo",
            "age": 1998,
            "notes": [3,5,7,4],
            
        },
        {
            "id": 2,
            "name": "Gabriel",
            "city": "Recife",
            "age": 1990,
            "notes": [2,8,9,7],
            
        },
        {
            "id": 3,
            "name": "João Victor",
            "city": "João Pessoa",
            "age": 1995,
            "notes": [5,8,6,7],
            
        }
    ]

}

setTimeout(()=> {
    (()=> {
        
        school.students.forEach(item => {
            let totalNote = item.notes.reduce((acc, value) => {
                return acc + value
            })

            calculateAverage(totalNote,item.name)

           
        })
    })()

},4000)


function calculateAverage(totalNote, name){
    let average = Math.round(totalNote/4)  
    console.log(`Aluno ${name} foi ${ average > 6 ? 'aprovado': 'reprovado'  } com media ${average}`)
}
  */



/* === LETRA B === */

/* $(document).ready(function(){
    
    $(".pesquisar").click(function(){
        $("div[data-car-type=honda] p.card-text").text("Nova descrição vinda do back end para o carro Honda")
        $("div[data-car-type=honda] img.card-img-top").attr('src','./imgs/honda-novo.jpg')
        
    })

}) */



/* === LETRA H === */

/* const addSix = (value) => {
    console.log(6 + value)
} 

addSix(10)
addSix(21)


const addTen = (value) => {
    console.log(10 + value)
}

addTen(10)
addTen(21)

const addTwo = (value) => {
    console.log(2 + value)
}

addTwo(10)
addTwo(21) */



/* === LETRA I === */
/* 
((frase,letras)=> {

    let stringFinal = '';

    letras.forEach(item => {
        frase.search(stringFinal += item )
    })

    console.log(stringFinal)



})("Ola, eu sou um desenvolvedor FrontEnd",['s','a','e','u','f']); */
 
