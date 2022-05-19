UNIDADE 1 - Conceitos de algoritmos e programação

Olá estudante, algoritmo é uma sequência finita de passos que podem levar à criação e execução de determinada tarefa com a intenção de resolver um problema (FORBELLONE; EBERSPÄCHER, 2005). Assim, é necessário entender as definições de um algoritmo, suas aplicações e seus tipos antes de avançar para os próximos níveis deste material.

A fim de colocarmos os conhecimentos a serem aprendidos em prática, vamos analisar a seguinte situação-problema: você inicia agora o seu trabalho em uma empresa responsável por criar um software de locação de filmes on-line. 

Você recebeu a demanda de criar uma funcionalidade para o software, que consiste em detectar se um filme pode ou não ser locado pelo cliente, com base em sua idade e na classificação indicativa do filme.

Antes de partir para a ação e implementar a funcionalidade em uma linguagem de programação, construa um algoritmo que receba como entradas a idade do cliente e a classificação indicativa dos filmes que ele pretende locar. 

Logo após, o programa deve processar essas informações e mostrar na tela do computador um dos possíveis resultados: “Este filme não é indicado para sua faixa etária” ou “Este filme é indicado para sua faixa etária”.

O algoritmo deverá ser elaborado nas formas descritas a seguir:

linguagem natural.
diagrama de blocos (fluxograma).
pseudocódigo.

Conceitos, aplicações e tipos de algoritmos

Você já deve ter se deparado muitas vezes com situações em que se deve realizar uma escolha e tomar uma decisão para resolver determinado problema. 

Por exemplo, ao ir ao mercado e encontrar duas marcas de um mesmo produto, qual produto você escolhe? O produto com o menor preço? O produto que você já está habituado a comprar? Ou um produto mais caro, importado?

São caminhos distintos e, dependendo da escolha, você terá um impacto no orçamento. Além disso, para executar uma ação, muitas vezes é necessário seguir uma sequência de passos para chegar a um resultado. 

Em uma receita de um prato, por exemplo, você tem uma sequência de passos a seguir para obter o resultado e, caso você mude algo, pode chegar a um objetivo diferente.

No contexto computacional funciona de forma similar: ao elaborar um programa, você deve antes elaborar o algoritmo, que nada mais é do que uma sequência de passos necessária para alcançar o objetivo de um programa.

Quando você utiliza algum aplicativo de navegação por GPS (os mais conhecidos são Google Maps e Waze), você insere o destino final e o aplicativo faz a escolha da melhor rota, de acordo com menor congestionamento, menor caminho ou menor tempo de viagem, e você pode configurar qual das opções você deseja – por trás disso há um algoritmo com todas essas alternativas.

A figura – Exemplo de aplicação de algoritmos –, ilustra um exemplo de aplicação desse tipo de abordagem. Imagine que você está no ponto azul e quer chegar ao vermelho: você terá algumas alternativas de rota, e o programa fará a escolha conforme os critérios estabelecidos por você.

A partir de agora você vai desmistificar como funcionam os algoritmos e quais são as suas aplicações dentro da programação. Para isso, você conhecerá conceitos, aplicações e tipos de algoritmos.

Berg e Figueiró (1998) descrevem algoritmos como uma sequência ordenada de passos que deve ser seguida para atingir um objetivo. Nesse sentido, os algoritmos nortearão você a descobrir qual o melhor percurso para solucionar um problema computacional. 

A elaboração de algoritmos é um passo importante para o desenvolvimento de um programa de computador (ou software), pois, com base na construção de algoritmos para a resolução de um problema, é possível traduzir o algoritmo para alguma linguagem de programação.

Conforme mencionado, para qualquer tarefa a ser executada no dia a dia podemos desenvolver um algoritmo. Como exemplo, tomemos a sequência de passos para o cozimento de arroz, que pode ser a seguinte:

Podemos, ainda, criar um algoritmo um pouco mais detalhado para preparar o cozimento do arroz:

Observe que não existe uma única forma de elaborar um algoritmo, porém, existe uma sequência lógica para a execução da tarefa. O passo 8, “Adicionar o arroz”, só pode ser realizado após pegar a panela (passo 5). Todavia, podem-se criar outras formas e sequências para alcançar o mesmo objetivo.

Para melhor entendimento dos algoritmos é necessário dividi-los em três partes:

* Entrada
* Processamento
* Saída 

A seguir, você vai entender o funcionamento dos algoritmos usando a linguagem natural, os diagramas de blocos (em algumas literaturas são conhecidos como fluxograma) e os pseudocódigos.

Blockly Games é um software gratuito, composto por um conjunto de jogos educacionais com enfoque no ensino de programação (BLOCKLY GAMES, 2020).

A figura - Jogo Labirinto Blockly para treino de lógica - ilustra um exemplo de jogo no qual o aluno precisa levar o avatar do Google Maps ao seu destino. Para isso, ele deve usar o conjunto de comandos disponíveis na plataforma. Neste exemplo, bastou utilizar dois comandos “Avançar” para que objetivo fosse atingido.

Ao resolver o problema, o software informa a quantidade de linhas de códigos em outra linguagem, chamada Javascript. Todavia, para o treino de lógica é muito interessante.

*****Linguagem natural

Segundo Santos (2001), a linguagem natural é uma forma de comunicação entre as pessoas de diversas línguas, que pode ser falada, escrita ou gesticulada, entre outras formas de comunicação. 

A linguagem natural é uma grande contribuição para o desenvolvimento de uma aplicação computacional, pois pode direcionar de forma simples e eficiente as descrições dos problemas e suas soluções.

O algoritmo para cozimento de arroz, apresentado anteriormente, é um exemplo de uso da linguagem natural. Para reforçar esse conceito, podemos considerar o cadastro das notas dos alunos de um curso. 

O problema é o seguinte: o usuário (possivelmente o professor) deverá entrar com dois valores que representam as notas de um aluno em cada bimestre, e o computador retornará o resultado da média desses valores (média das notas). Então, se a média for maior ou igual a 6.0 (seis), o aluno está aprovado; caso contrário, está reprovado.

Para realizar a solução desse problema, podemos fazer uso da seguinte estrutura:

Observe que a linguagem natural é muito próxima da nossa linguagem.

Antes de iniciar a explicação acerca do diagrama de blocos e pseudocódigo, vamos entender sucintamente o que são variáveis e atribuições, para que você, estudante, tenha condições de interpretar e avançar nos seus estudos de algoritmos.

Variáveis
As variáveis, como o próprio nome sugere, consistem em algo que pode sofrer variações. Elas estão relacionadas à identificação de uma informação, por exemplo, o nome de um aluno, suas notas bimestrais, entre outras. 

***Atribuição
A atribuição, representada em pseudocódigo por meio do símbolo ←, tem a função de indicar valores para as variáveis, ou seja, atribuir informação para variável. Por exemplo:

idade ← 8
nome_aluno ← “márcio”
nome_professor ← “josé”
nota_aluno ← 9.5

O exemplo apresentado indica que o número “8” está sendo atribuído como valor (informação) para a variável “idade”. Analogamente, o texto “márcio” está atribuído como valor para a variável “nome_aluno” e o valor real “9.5” está sendo atribuído como valor para a variável “nota_aluno”.

Dando sequência ao seu estudo de algoritmos, veja a seguir o funcionamento dos diagramas de blocos, que também podem ser chamados de fluxogramas.

Diagrama de blocos (fluxograma)

Segundo Manzano, Franco e Villar (2015), podemos caracterizar diagrama de blocos como um conjunto de símbolos gráficos, em que cada um desses símbolos representa ações específicas a serem executadas pelo computador. 

Vale lembrar que o diagrama de blocos determina a linha de raciocínio utilizada pelo desenvolvedor para resolver problemas. Ao escrever um diagrama de blocos, o desenvolvedor deve estar ciente de que os símbolos utilizados estejam em harmonia e sejam de fácil entendimento. 

O quadro a seguir mostra os principais símbolos utilizados para se descrever um algoritmo.

Ao utilizar os símbolos do diagrama de blocos com suas respectivas instruções, você vai aprendendo e desenvolvendo cada vez mais a sua lógica em relação à resolução de problemas. 

A figura – Diagrama de blocos (fluxograma) –, ilustra o diagrama com o algoritmo descrito em linguagem natural, que calcula a média de notas e a situação de um aluno, representado por meio de um diagrama de blocos.

🔁 Assimile

Algumas dicas para construir um diagrama de blocos (fluxograma) são as seguintes:

estar atento à sequência das instruções.
certificar-se de que o diagrama de blocos (fluxograma) comece de cima para baixo e da esquerda para direita.
ficar atento para não cruzar as linhas dos fluxos.

Vejamos, então, as representações de cada passo do diagrama:

O símbolo terminal deu início ao algoritmo.

O símbolo de processamento definiu as variáveis.

O símbolo exibido mostra na tela o que o usuário deve fazer. Nesse caso, ele deve informar o valor da primeira nota do aluno, isto é, a nota do primeiro bimestre.

O símbolo de entrada manual libera o usuário para entrar com a primeira nota. Observe que há uma diferença entre “nota 1”, no símbolo anterior, e “nota1” descrita a seguir. No símbolo anterior, “nota 1” refere-se ao texto que será apresentado ao usuário, para que ele saiba o que deve ser feito. Já o símbolo que segue, “nota1”, refere-se ao nome da variável declarada anteriormente (no segundo símbolo utilizado neste diagrama de blocos).

O símbolo exibido mostra na tela o que o usuário deve fazer. Nesse caso, ele deve informar o valor da primeira nota do aluno, isto é, a nota do primeiro bimestre.

O símbolo de entrada manual libera o usuário para entrar com a primeira nota. Observe que há uma diferença entre “nota 1”, no símbolo anterior, e “nota1” descrita a seguir. No símbolo anterior, “nota 1” refere-se ao texto que será apresentado ao usuário, para que ele saiba o que deve ser feito. Já o símbolo que segue, “nota1”, refere-se ao nome da variável declarada anteriormente (no segundo símbolo utilizado neste diagrama de blocos).

O próximo símbolo de processamento realiza a atribuição do resultado do cálculo da média aritmética das duas notas lidas anteriormente à variável “media”. Neste momento, você pode se perguntar se não precisa adicionar a soma das notas em uma variável antes de calcular a média. A resposta é: depende! 

Se você for usar o valor da soma das notas para mostrá-lo na tela ou como entrada de outro cálculo, além da média, então sim, vale a pena armazená-lo em uma variável. Como esse não é o nosso caso, então não foi preciso declarar mais uma variável no algoritmo.

O símbolo de exibição mostra na tela o resultado da média calculada.

O símbolo de decisão define a condicional (verdadeiro ou falso) para a expressão “media >= 6”.

Se a condição for verdadeira, o texto impresso na tela do usuário será “Aprovado”.

Se a condição for falsa, o texto impresso na tela do usuário será “Reprovado”.

Para finalizar o algoritmo, o símbolo terminal é utilizado mais uma vez.

Outro exemplo que podemos destacar é a operação em um caixa eletrônico. Uma das primeiras atividades que o usuário deve realizar após ter se identificado é selecionar a operação a ser executada. Por exemplo: verificar saldo, emitir extrato, saque e sair. 

As figuras a seguir ilustram o diagrama para realizar essa operação.

Ainda a respeito do exemplo da figura – Fluxograma de operação de caixa eletrônico –, para que o fluxograma não fique muito extenso, dificultando seu entendimento, você pode tratar cada operação bancária em um fluxograma à parte.

A figura ilustra o exemplo de fluxograma que trata da operação de saque em um sistema bancário.

💭 Reflita
 
Observando o fluxograma que representa a operação de saque em um sistema bancário, apresentado na figura – Fluxograma da operação de saque  –, como você alteraria o fluxograma para que o usuário possa escolher informar ou não um novo valor, caso o valor atualmente informado por ele seja inválido (ou seja, exceda o limite máximo ou seja maior do que o saldo atual do cliente)?

****Conceitos de linguagem de programação

Após compreendermos os conceitos, aplicações e tipos de algoritmos, vamos entender a importância da linguagem de programação e das suas famílias, assim como as projeções profissionais que a carreira de programador pode proporcionar.

Segundo Marçula (2013, p. 170):

A Linguagem de Programação (LP) pode ser entendida como um conjunto de palavras (vocabulário) e um conjunto de regras gramaticais (para relacionar essas palavras) usados para instruir o sistema de computação a realizar tarefas específicas e, com isso, criar os programas. Cada linguagem tem o seu conjunto de palavras-chave e sintaxes.

Para Tucker (2010), da mesma forma que entendemos as linguagens naturais, utilizadas por todos no dia a dia, a linguagem de programação é a comunicação de ideias entre o computador e as pessoas. 

Ainda segundo o autor, as primeiras linguagens de computador utilizadas foram as linguagens de máquina e a linguagem assembly, a partir da década de 1940. Desde então, muitas linguagens surgiram, bem como foram criados paradigmas de linguagem de programação.

De acordo com Houaiss, Franco e Villar (2001, p. 329):

paradigma significa modelo, padrão. No contexto da programação de computadores, um paradigma é um jeito, uma maneira, um estilo de se programar.

Todas as linguagens de programação para a criação de um programa apresentam uma sintaxe, que nada mais é do que a forma como o programa é escrito. De acordo com Tucker (2010, p. 24):

[a] sintaxe de uma linguagem de programação é uma descrição precisa de todos os seus programas gramaticalmente corretos.

Não há como negar: todas as áreas estão voltadas para a tecnologia e é por meio de diversas formas de pensamentos que os algoritmos são realizados. 

Por se tratar de algumas das profissões do futuro, é necessário ter em mente que as linguagens evoluem e que será preciso estar sempre atualizado, realizar certificações, estudar línguas e buscar novos caminhos na sua área de atuação. Você poderá ser um grande entusiasta em algoritmos e linguagens de programação. 

Como já vimos os principais tipos de paradigmas e algumas linguagens de programação relacionadas a eles, conheceremos na próxima aula a linguagem com a qual trabalharemos, a saber, a linguagem C.








