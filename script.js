console.log("Hello Word")

console.log("Ano Novo está chegando!!")

let cantora = "Mariah Carey"
let idade = 54
let anoAtual = 2023
let anoNascimento = anoAtual - idade  
console.log(cantora, "tem:" , idade, "anos")
console.log(anoNascimento)
console.log("O ano que a" , cantora, "nasceu foi em" , anoNascimento)

let diaDaSemana = "quarta-feira"
console.log(diaDaSemana === "segunda-feira")
console.log(diaDaSemana !== "quarta-feira")
console.log(diaDaSemana == "quarta-feira")
console.log(typeof diaDaSemana)

let suaIdade = 25
if (suaIdade >= 18){
    console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.")
} else {
    console.log("Sinto muito, mas assistirá da tv globo.")
}


let mesDeAniversario = "Janeiro"
if (mesDeAniversario == "Agosto"){
    console.log("Uma ou mais opções estão corretas. O mês escolhido foi:" , mesDeAniversario)
} else if (mesDeAniversario == "Dezembro"){
    console.log("Uma ou mais opções estão corretas. O mês escolhido foi:" , mesDeAniversario)
} else if (mesDeAniversario == "Junho"){
    console.log("Uma ou mais opções estão corretas. O mês escolhido foi:" , mesDeAniversario)
} else {
    console.log("Algo de errado não está certo, o mês digitado foi o mês:" , mesDeAniversario)
}

