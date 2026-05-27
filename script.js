const TABELA = document.getElementById("tabelaNotasInput")
const COLUNAS_INICIAL = TABELA.rows[0].cells.length - 1

const MEDIA_MINIMA = 6
let clicks = 0

function adicionarColuna(){


    clicks++
    let cell = 4
    for (let i = 0; i < TABELA.rows.length; i++) {
        let novaCelula = TABELA.rows[i].insertCell(TABELA.rows[i].cells.length - 1);
         
        if (i === 0){
            novaCelula.innerHTML = '<th class="input"><b> AF'+ ((COLUNAS_INICIAL -2) + clicks) + '</b><th>'
        } else{
            
            let idLinha = TABELA.rows[i].id
            let novoId = idLinha + "af_" + ((COLUNAS_INICIAL - 4) + clicks)
            let novoPlaceHolder = "AF" + ((COLUNAS_INICIAL - 2) + clicks)
            let novoHTML = '<td class="input"> <input type="text" id="' + novoId + '" placeholder="' + novoPlaceHolder +'"></td>'
            //console.log(novoHTML)
            //console.log(COLUNAS_INICIAL)
            novaCelula.innerHTML = novoHTML;
        }
    }
    console.log(clicks)
}

function removerColuna(){
    clicks--
    if (clicks >= 0){
        for (let i = 0; i < TABELA.rows.length; i++){
            TABELA.rows[i].deleteCell(COLUNAS_INICIAL)
        }
        
    } else{
        alert("Não é possível reduzir mais colunas!")
        clicks++
    }
    console.log(clicks)
}

function tabelaMatriz(){
let tabelaMatriz = []

for (let i = 1; i < TABELA.rows.length; i++){
    let linhaMatriz = []
    let inputs = TABELA.rows[i].querySelectorAll("input");

    inputs.forEach(input => {
        let valor = parseFloat(input.value) || -1;
        linhaMatriz.push(valor);
    });

    tabelaMatriz.push(linhaMatriz);

}

    return tabelaMatriz     
}



function calcularMedia(notas){
    //Calculo da média de redes
    let totalRedes = 0;
    notasRedes = tabelaMatriz()[0]
    for (let i= 0; i < notasRedes.length; i++){
        totalRedes += notasRedes[i];
    }
    
    let mediaRedes = totalRedes / notasRedes.length
    console.log("A média de redes é: " + mediaRedes)

    //Calculo da média de Projeto de Extensão
    let totalProjeto = 0;
    notasProjeto = tabelaMatriz()[1]
    for (let i= 0; i < notasProjeto.length; i++){
        totalProjeto += notasProjeto[i];
    }

    let mediaProjeto = totalProjeto / notasProjeto.length
    console.log("A média de Projeto é: " + mediaProjeto)
    
    //Calculo da média de Arquitetura
    let totalArq = 0;
    notasArq = tabelaMatriz()[2]
    for (let i= 0; i < notasArq.length; i++){
        totalArq += notasArq[i];
    }

    let mediaArq = totalArq / notasArq.length
    console.log("A média de Arquitetura é: " + mediaArq)
    
    //Calculo da media de Lógica
    let totalLogica = 0;
    notasLogica = tabelaMatriz()[3]
    for (let i= 0; i < notasLogica.length; i++){
        totalLogica += notasLogica[i];
    }

    let mediaLogica = totalLogica / notasLogica.length
    console.log("A média de Arquitetura é: " + mediaLogica)


    //Calculo da nota de Algoritmos
    let totalAlg = 0;
    notasAlg = tabelaMatriz()[4]
    for (let i= 0; i < notasAlg.length; i++){
        totalAlg += notasAlg[i];
    }

    let mediaAlg = totalAlg / notasAlg.length
    console.log("A média de Algoritmos é: " + mediaAlg)
    
    medias = [mediaRedes, mediaProjeto, mediaArq, mediaLogica, mediaAlg]
    console.log(medias)

    return medias
}


function exibirResultado(medias){

let mediaRedes = medias[0].toFixed(2)
let mediaProjeto = medias[1].toFixed(2)
let mediaArq  = medias[2].toFixed(2)
let mediaLogica = medias[3].toFixed(2)
let mediaAlg = medias[4].toFixed(2)

let exibicao

if (
mediaRedes < 0 || mediaRedes > 10 ||
mediaProjeto < 0 || mediaProjeto > 10 ||
mediaArq < 0 || mediaArq > 10 ||
mediaLogica < 0 || mediaLogica > 10 ||
mediaAlg < 0 || mediaAlg > 10
)
{
alert("Insira valores entre 0 e 10!")
exibicao = ``
} else{
exibicao = `
    <h1>MÉDIA DAS NOTAS INSERIDAS: </h1>
    <table class="tabelaNotas">
        <thead>
                        <tr>
                            <th class="output"> Redes de Computadores</th>
                            <th class="output">Projeto de Extensão</th>
                            <th class="output">Arquitetura de Computadores</th>
                            <th class="output">Lógica aplicada a computação</th>
                            <th class="output">Algoritmos e Linguagem de programação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="output">
                                ${mediaRedes}
                            </td>
                            <td class="output">
                                ${mediaProjeto}
                            </td>
                            <td class="output">
                                ${mediaArq}
                            </td>
                            <td class="output">
                                ${mediaLogica}
                            </td>     
                            <td class="output">
                                ${mediaAlg}
                            </td>                            
                        </tr>
                    </tbody>
                </table>
`;    
}


/*campoNotaRedes = document.getElementById("nota_final_redes")
campoNotaRedes.innerHTML = mediaRedes
console.log(medias[0])*/


area_exibicao = document.getElementById("area_exibicao")

area_exibicao.innerHTML = exibicao

}


function main(){
    tabela = tabelaMatriz()
    medias = calcularMedia(tabela)
    exibirResultado(medias)
}