/* variável global que armazena a página atual */
var paginaAtual = 1;

/* método que realiza a requisição dos personagens da API */
fetch('https://rickandmortyapi.com/api/character/?page=' + paginaAtual, {
    method: 'GET'
})

/* transforma os dados recebidos em json */
.then(response => response.json())
.then(function(json){

    /* variáveis que serão usadas no escopo do html */
    totalPaginas = json.info.pages
    var card = document.querySelector('.container-aplicacao');
    var paginacaoSuperior = document.querySelector('.container-paginacao-superior');
    var paginacaoInferior = document.querySelector('.container-paginacao-inferior');
    
    /* paginação superior da aplicação */
    paginacaoSuperior.innerHTML+=`
        <ul class="paginacao">
            <li><a name="botaoRetorna" id="botaoRetorna" onclick="retornaPagina()"> Anterior </a></li>
            <li><span class="contador">` + paginaAtual + `/` + json.info.pages + `</span></li>
            <li><a name="botaoAvanca" id="botaoAvanca" onclick="avancaPagina()"> Próxima </a></li>
        </ul>`

    /* paginação inferior da aplicação */
    paginacaoInferior.innerHTML+=`
    <ul class="paginacao">
        <li><a name="botaoRetorna" id="botaoRetorna" onclick="retornaPagina()"> Anterior </a></li>
        <li><span class="contador">` + paginaAtual + `/` + json.info.pages + `</span></li>
        <li><a name="botaoAvanca" id="botaoAvanca" onclick="avancaPagina()"> Próxima </a></li>
    </ul>`

    /* função que exibe os personagens no container html */
    json.results.map(function(results){
        card.innerHTML+=`

            <div class="card"> 
                <div class="card-img"> 
                    <img src=` + results.image + `>
                </div>

                <div class="card-info"> 
                    <strong class="nome"> ` + results.name + ` </strong> <br>
                    <i> ` + results.status + ` - </i> 
                    <span> ` + results.species + ` </span> <br>

                    <strong id="titulos"> Gender: </strong>
                    <p> ` + results.gender + ` </p>

                    <strong id="titulos"> First seen in: </strong>
                    <p> ` + results.origin.name + ` </p>

                    <strong id="titulos"> Last known location: </strong>
                    <p> ` + results.location.name + ` </p>
                </div>
            </div>
        `;
    })
})

/* função de avançar página */
function avancaPagina() {

    /* adiciona uma página no contador */
    if ( paginaAtual < totalPaginas) {
        paginaAtual = paginaAtual + 1;
    }
    
    /* realiza uma nova requisição da API com a nova página de personagens */
    fetch('https://rickandmortyapi.com/api/character/?page=' + paginaAtual, {
        method: 'GET'
    })

    /* transforma os dados recebidos em json */
    .then(response => response.json())
    .then(function(json){
        
        /* variáveis que serão usadas no escopo do html */
        var card = document.querySelector('.container-aplicacao');
        var paginacaoSuperior = document.querySelector('.container-paginacao-superior');
        var paginacaoInferior = document.querySelector('.container-paginacao-inferior');

        /* limpa os dados da paginação anterior do html */
        paginacaoSuperior.innerHTML=` `
        
        /* exibe a paginação superior atualizada */
        paginacaoSuperior.innerHTML+=`
            <ul class="paginacao">
                <li><a name="botaoRetorna" id="botaoRetorna" onclick="retornaPagina()"> Anterior </a></li>
                <li><span class="contador">` + paginaAtual + `/` + json.info.pages + `</span></li>
                <li><a name="botaoAvanca" id="botaoAvanca" onclick="avancaPagina()"> Próxima </a></li>
            </ul>`

        /* limpa os dados da paginação anterior do html */
        paginacaoInferior.innerHTML=` `
    
        /* exibe a paginação inferior atualizada */
        paginacaoInferior.innerHTML+=`
            <ul class="paginacao">
                <li><a name="botaoRetorna" id="botaoRetorna" onclick="retornaPagina()"> Anterior </a></li>
                <li><span class="contador">` + paginaAtual + `/` + json.info.pages + `</span></li>
                <li><a name="botaoAvanca" id="botaoAvanca" onclick="avancaPagina()"> Próxima </a></li>
            </ul>`
        

        /* limpa os cards anteriores do html */ 
        card.innerHTML=` `
        
        /* função que exibe os personagens atualizados no container html */
        json.results.map(function(results){

            card.innerHTML+=`

                <div class="card"> 
                    <div class="card-img"> 
                        <img src=` + results.image + `>
                    </div>

                    <div class="card-info"> 
                        <strong class="nome"> ` + results.name + ` </strong> <br>
                        <i> ` + results.status + ` - </i> 
                        <span> ` + results.species + ` </span> <br>

                        <strong id="titulos"> Gender: </strong>
                        <p> ` + results.gender + ` </p>

                        <strong id="titulos"> First seen in: </strong>
                        <p> ` + results.origin.name + ` </p>

                        <strong id="titulos"> Last known location: </strong>
                        <p> ` + results.location.name + ` </p>
                    </div>
                </div>
            `;
        })
    })
} 
    
/* função de retornar página */
function retornaPagina() {

    /* subtrai página do contador */
    paginaAtual = paginaAtual - 1;

    /* impede que o contador seja menor do que 1 */
    if ( paginaAtual < 1 ) {
        paginaAtual = 1;
    } 
    
    /* realiza uma nova requisição da API com a nova página de personagens */
    fetch('https://rickandmortyapi.com/api/character/?page=' + paginaAtual, {
        method: 'GET'
    })

    /* transforma os dados recebidos em json */
    .then(response => response.json())
    .then(function(json){

        /* variáveis que serão usadas no escopo do html */
        var card = document.querySelector('.container-aplicacao');
        var paginacaoSuperior = document.querySelector('.container-paginacao-superior');
        var paginacaoInferior = document.querySelector('.container-paginacao-inferior');
        
        /* limpa os dados da paginação anterior do html */
        paginacaoSuperior.innerHTML=` `
        
        /* exibe a paginação superior atualizada */
        paginacaoSuperior.innerHTML+=`
            <ul class="paginacao">
                <li><a name="botaoRetorna" id="botaoRetorna" onclick="retornaPagina()"> Anterior </a></li>
                <li><span class="contador">` + paginaAtual + `/` + json.info.pages + `</span></li>
                <li><a name="botaoAvanca" id="botaoAvanca" onclick="avancaPagina()"> Próxima </a></li>
            </ul>`

        /* limpa os dados da paginação anterior do html */
        paginacaoInferior.innerHTML=` `

        /* exibe a paginação inferior atualizada */
        paginacaoInferior.innerHTML+=`
            <ul class="paginacao">
                <li><a name="botaoRetorna" id="botaoRetorna" onclick="retornaPagina()"> Anterior </a></li>
                <li><span class="contador">` + paginaAtual + `/` + json.info.pages + `</span></li>
                <li><a name="botaoAvanca" id="botaoAvanca" onclick="avancaPagina()"> Próxima </a></li>
            </ul>`
        
        /* limpa os cards anteriores do html */ 
        card.innerHTML=` `

        /* função que exibe os personagens atualizados no container html */
        json.results.map(function(results){

            card.innerHTML+=`

                <div class="card"> 
                    <div class="card-img"> 
                        <img src=` + results.image + `>
                    </div>

                    <div class="card-info"> 
                        <strong class="nome"> ` + results.name + ` </strong> <br>
                        <i> ` + results.status + ` - </i> 
                        <span> ` + results.species + ` </span> <br>

                        <strong id="titulos"> Gender: </strong>
                        <p> ` + results.gender + ` </p>

                        <strong id="titulos"> First seen in: </strong>
                        <p> ` + results.origin.name + ` </p>

                        <strong id="titulos"> Last known location: </strong>
                        <p> ` + results.location.name + ` </p>
                    </div>
                </div>
            `;
        })
    })
}



    
