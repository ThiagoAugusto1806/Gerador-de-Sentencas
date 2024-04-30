
var vetorS = [] 
var vetorA = [] 
var vetorB = [] 
var vetorC = []
var Eresultado = []
var stringArray = []
var escolhaPC
var Eresultado = ""
var Dresto = ""


function gerarTexto(){
    let resultadoFinal = ""
    var div = document.getElementById("Resultado")
    div.textContent = ""
    var str = document.getElementById("opcaoS").value
    if (str. length === 0) {
        console.log("vazio")
        alert("Inserir S")
        return 0
    }
    vetorS = str.split("|")
    str = document.getElementById("opcaoA").value
    vetorA = str.split("|")
    str = document.getElementById("opcaoB").value
    vetorB = str.split("|")
    str = document.getElementById("opcaoC").value
    vetorC = str.split("|")
    console.log("vetorS " + vetorS)
    console.log("vetorA " + vetorA)
    console.log("vetorB " + vetorB)
    console.log("vetorC " + vetorC)

    escolhaPC = vetorS[numeroAleatorio(vetorS)]
    console.log(escolhaPC)
    escolhaPC = toString(escolhaPC)
    console.log(escolhaPC)
    while(escolhaPC != "Funciona"){
        escolhaPC = toString(escolhaPC)
        console.log(escolhaPC)
    }
    
    if(Dresto != ""){
        var resto = [] 
        resto = Dresto.split("")
        resto.reverse()
        Dresto = ""
        for(var i = 0; i<resto.length;i++){
            Dresto += resto[i]
        }
        resultadoFinal = Eresultado + Dresto
    }else{
        resultadoFinal = Eresultado
    }
    
    
    div.textContent = resultadoFinal
    
    
    console.log("resto " + Dresto)
    console.log("resultado " + Eresultado)
    console.log("escolhaPc " + escolhaPC)
    console.log("resultado Final " + resultadoFinal)
    resultadoFinal = ""
    Dresto = ""
    Eresultado = ""
}

function toString(escolhaPC){
    for(let i = 0;i<escolhaPC.length; i++){
        if(escolhaPC.substring(i, i+1) == "S"){
            Dresto += escolhaPC.substring(i+1, 1000)
            escolhaPC = vetorS[numeroAleatorio(vetorS)]
            
            return escolhaPC
        }else if(escolhaPC.substring(i, i+1) == "A"){
            Dresto += escolhaPC.substring(i+1, 1000)
            escolhaPC = vetorA[numeroAleatorio(vetorA)]
            
            return escolhaPC
        }else if(escolhaPC.substring(i, i+1) == "B"){
            Dresto += escolhaPC.substring(i+1, 1000)
            escolhaPC = vetorB[numeroAleatorio(vetorB)]
            
            return escolhaPC
        }else if(escolhaPC.substring(i, i+1) == "C"){
            Dresto += escolhaPC.substring(i+1, 1000)
            escolhaPC = vetorC[numeroAleatorio(vetorC)]
            
            return escolhaPC
        }else if(escolhaPC.substring(i, i+1) == "&"){
            return "Funciona"
        }else {
            Eresultado += escolhaPC.substring(i, i+1)
            
        }
    }
    return "Funciona"
}

function verificaTexto(){
    var categoria = 0
    let i = 0
    for(i = 0;i<vetorS.length;i++){
        console.log(vetorS)

    }
    for(i = 0;i<vetorA.length;i++){
        console.log(vetorA)
    }

    return 0
}

function numeroAleatorio(lista){
    var opcoes = 100 / lista.length
    return Math.floor(Math.random() * 100 / opcoes)
}