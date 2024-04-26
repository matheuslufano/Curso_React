// Componentes podem ser definidos por funções js: 
// Segue o exemplo do componente "BemVindo()"

function BemVindo(props){
    if(props.nome){
        return <h1>Olá, {props.nome}!</h1>
    }
    return <h1>Olá estranho!</h1>
}

// componente "Conteudo()"
function Conteudo(props){
    return(
        <dev>
            <h2>Isso é outro componente</h2>
            <p>Por tanto sr. {props.nome} </p>
            <p>Componentes em react são objetos de facil edição</p>
        </dev>
    )
}

// Componente "App()"
function App(){
    return(
        <div>
            <p>Seja bem vindo ao React!</p>
            <button>Botão</button>
        </div>
    )
}


// Método render
ReactDOM.render(
    <div>
        <BemVindo nome= "Matheus"/>
        <BemVindo/>
        <BemVindo/>
        <Conteudo nome= "Matheus" />
        <App></App>
    </div>,
    document.getElementById('root')
);