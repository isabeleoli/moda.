const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Moda é a expresão de uma cultura e reflete os movimentos de mudança pelos quais a sociedade está passando.",
        alternativas: [
            {
                texto: "Nada é permanente, exceto a mudança!",
                afirmacao: "A moda, como um fenômeno social, possui diferentes limiares de abordagem, e uma delas pode se relacionar a um processo de metamorfose efêmera que ocorre nas mais diferentes esferas que compõem o constructo cultural dos indivíduos.. "
            },
            {
                texto: "Isto é extraordinário!",
                afirmacao: "a moda em si faz parte de todo nosso cotidiano."
            }
        ]
    },
    {
        enunciado: "A variação da característica das vestimentas surgiu para diferenciar o que antes era igual, usava-se um estilo de roupa desde a infância até a morte.'',
        alternativas: [
            {
                texto: " A moda é uma linguagem que permite que as pessoas comuniquem quem são, como se sentem e o que representam, sem a necessidade de palavras..",
                afirmacao: "A moda é muitas vezes vista como um setor frívolo, vã e efêmero."
            },
            {
                texto: "Casual, elegante, clássico, romântico, sexy, dramático e criativo são os sete estilos universais.",
                afirmacao: "A moda nos permite compor nosso look, da maneira que nos convém, de acordo com nossa personalidade e nosso estilo de ser."
            }
        ]
    },
    {
        enunciado: "Moda 2024  ",
        alternativas: [
            {
                texto: "Ela esta transformando visões.",
                afirmacao: "A moda transaforma, muda a maneira das pessoas verem a vida."
            },
            {
                texto: "A cada ano que passa, as tendencias de moda vão se inovando.",
                afirmacao: "Isso é excelente."
            }
        ]
    },
    {
        enunciado: "As tendencias deste ano",
        alternativas: [
            {
                texto: "Com a estética ultra feminina, os laços foram uma das tendencias de moda de 2024",
                afirmacao: "Eles mudam o visual."
            },
            {
                texto: "Eles dominaram as passarelas, sendo incluídos em desfiles, de diversas formas.",
                afirmacao: "Uma ideia sensacional"
            }
        ]
    },
    {
        enunciado: "Os novos tons",
        alternativas: [
            {
                texto: "Este ano os tons de marrom são uma aposta certa para o Outono/Inverno.",
                afirmacao: "Deixando as passarelas com um tom a mais de elegancia."
            },
            {
                texto: "tendencia 2025.",
                afirmacao: "ja para o próximo ano, a proposta para o ano será o amarelo, que esteve muito presente nas passarelas, e que pretendem tomar lugar no dia a dia da sociedade. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
