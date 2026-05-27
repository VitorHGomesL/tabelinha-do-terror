const TABELA = document.getElementById("tabelaNotas")
const COLUNAS = TABELA.rows[0].cells.length - 1
const MEDIA_MINIMA = 6
let clicks = 0

function adicionarColuna(){
    clicks++
    let cell = 4
    for (let i = 0; i < TABELA.rows.length; i++) {
        let novaCelula = TABELA.rows[i].insertCell(3);
         
        if (i === 0){
            novaCelula.innerHTML = "<th><b> AF"+ ((COLUNAS -2) + clicks) + "</b><th>"
        } else{
            
            let idLinha = TABELA.rows[i].id
            let novoId = idLinha + "af_" + ((COLUNAS - 4) + clicks)
            let novoPlaceHolder = "AF" + ((COLUNAS - 2) + clicks)
            let novoHTML = '<input type="text" id="' + novoId + '" placeholder="' + novoPlaceHolder +'">'
            //console.log(novoHTML)
            //console.log(COLUNAS)
            novaCelula.innerHTML = novoHTML;
        }
    }
    console.log(clicks)
}

function removerColuna(){
    clicks--
    if (clicks >= 0){
        for (let i = 0; i < TABELA.rows.length; i++){
            TABELA.rows[i].deleteCell(COLUNAS)
        }
        
    } else{
        alert("Não é possível reduzir mais colunas!")
        clicks++
    }
    console.log(clicks)
}


function identificarNotas(){
    // Redes de Computadores
    let n1Redes = parseFloat(document.getElementById("redes_n1").value);
    let afRedes = parseFloat(document.getElementById("redes_af").value);
    //let n3Redes = parseFloat(document.getElementById("redes_n3").value);

    if (Number.isNaN(n1Redes)){
        n1Redes = -1
    } 
    if (Number.isNaN(afRedes)){
        afRedes = -1
    } 

    // Projeto de Extensão
    let n1Projeto = parseFloat(document.getElementById("projeto_n1").value);
    let afProjeto = parseFloat(document.getElementById("projeto_af").value);
    //let n3Projeto = parseFloat(document.getElementById("projeto_n3").value);

    if (Number.isNaN(n1Projeto)){
        n1Projeto = -1
    } 
    if (Number.isNaN(afProjeto)){
        afProjeto = -1
    } 

    // Arquitetura de Computadores
    let n1Arq = parseFloat(document.getElementById("arq_n1").value);
    let afArq = parseFloat(document.getElementById("arq_af").value);
    //let n3Arq = parseFloat(document.getElementById("arq_n3").value);

    if (Number.isNaN(n1Arq)){
        n1Arq = -1
    } 
    if (Number.isNaN(afArq)){
        afArq = -1
    } 

    // Lógica aplicada a computação
    let n1Logica = parseFloat(document.getElementById("logica_n1").value);
    let afLogica = parseFloat(document.getElementById("logica_af").value);
    //let n3Logica = parseFloat(document.getElementById("logica_n3").value);

    if (Number.isNaN(n1Logica)){
        n1Logica = -1
    } 
    if (Number.isNaN(afLogica)){
        afLogica = -1
    } 

    // Algoritmos e Linguagem de Programação
    let n1Alg = parseFloat(document.getElementById("alg_n1").value);
    let afAlg = parseFloat(document.getElementById("alg_af").value);
    //let n3Alg = parseFloat(document.getElementById("alg_n3").value);

    if (Number.isNaN(n1Alg)){
        n1Alg = -1
    } 
    if (Number.isNaN(afAlg)){
        afAlg = -1
    }    


    notas = {
        //Redes de Computadores
        notasRedes: [n1Redes, afRedes],

        //Projeto de Extensão
        notasProjeto: [n1Projeto, afProjeto],

        //Arquitetura de computadores
        notasArq: [n1Arq, afArq],

        //Logica aplicada a computação
        notasLogica: [n1Logica, afLogica],

        //Algoritmos
        notasAlg: [n1Alg, afAlg]
    }
    return notas

}

function calcularMedia(notas){
    //Calculo da média de redes
    let totalRedes = 0;
    notasRedes = notas.notasRedes
    for (let i= 0; i < notasRedes.length; i++){
        totalRedes += notasRedes[i];
    }
    
    let mediaRedes = totalRedes / notasRedes.length
    console.log("A média de redes é: " + mediaRedes)

    //Calculo da média de Projeto de Extensão
    let totalProjeto = 0;
    notasProjeto = notas.notasProjeto
    for (let i= 0; i < notasProjeto.length; i++){
        totalProjeto += notasProjeto[i];
    }

    let mediaProjeto = totalProjeto / notasProjeto.length
    console.log("A média de Projeto é: " + mediaProjeto)
    
    //Calculo da média de Arquitetura
    let totalArq = 0;
    notasArq = notas.notasArq
    for (let i= 0; i < notasArq.length; i++){
        totalArq += notasArq[i];
    }

    let mediaArq = totalArq / notasArq.length
    console.log("A média de Arquitetura é: " + mediaArq)
    
    //Calculo da media de Lógica
    let totalLogica = 0;
    notasLogica = notas.notasLogica
    for (let i= 0; i < notasLogica.length; i++){
        totalLogica += notasLogica[i];
    }

    let mediaLogica = totalLogica / notasLogica.length
    console.log("A média de Arquitetura é: " + mediaLogica)


    //Calculo da nota de Algoritmos
    let totalAlg = 0;
    notasAlg = notas.notasAlg
    for (let i= 0; i < notasAlg.length; i++){
        totalAlg += notasAlg[i];
    }

    let mediaAlg = totalAlg / notasAlg.length
    console.log("A média de Algoritmos é: " + mediaAlg)
    
    medias = [mediaRedes, mediaProjeto, mediaArq, mediaLogica, mediaAlg]
    console.log(medias)

    return medias
}


function exibirNotas(medias){

let mediaRedes = medias[0]
let mediaProjeto = medias[1]
let mediaArq  = medias[2]
let mediaLogica = medias[3]
let mediaAlg = medias[4]

/*campoNotaRedes = document.getElementById("nota_final_redes")
campoNotaRedes.innerHTML = mediaRedes
console.log(medias[0])*/

let exibicao = `
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
area_exibicao = document.getElementById("area_exibicao")

area_exibicao.innerHTML = exibicao

}



function main(){
    notas = identificarNotas()
    medias = calcularMedia(notas)
    exibirNotas(medias)

}