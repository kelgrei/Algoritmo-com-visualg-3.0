Algoritmo "Calcular Média de notas"

Var
Nota1, nota2, media:Real

Inicio
Escreva("Informa a nota 1:")
Leia(Nota1)
Escreva("Informa a nota 2:")
Leia(Nota2)
media <- (Nota1 + Nota2)/2
Escreva(media)
Se (media >- 6) então
    Escreva("Aprovado")
Senão
    Escreva("Reprovado")
fimse

Fimalgoritmo


///////////////////////////////////

Algoritmo "Verifica classificação indicativa"

Var
class_indicativa, idade_cliente: Inteiro

Inicio
Escreva("Informa sua Idade: ")
Leia(Idade_cliente)
Escreva("Informe a classificação indicativa do filme: ")
Leia(class_indicativa)
Se (idade_cliente <= class_indicativa) então
    Escreva("Esse filme não é indicado para a sua Faixa etária")
Senão
    Escreva("Esse filme é indicado para a sua Faixa etária")
fimse

Fimalgoritmo
