// Componente FUNCIONAL
// function Destaque(props){
//     return(
//     <div class="p-5 mb-4 bg-body-tertiary rounded-3">
//         <div class="container-fluid py-5">
//             <h1 class="display-5 fw-bold">Custom jumbotron</h1>
//             <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
//             <button class="btn btn-primary btn-lg" type="button">Example button</button>
//         </div>
//     </div>
//     )
// }

// Componente de CLASSE
// Para fazer um componente por meio de class é preciso seguir a seguinte extrutura:
class Destaque extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            // aqui monda o componete.
            <div class="p-5 mb-4 bg-body-tertiary rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">{this.props.texto}</h1>
                <p class="col-md-8 fs-4">Clica no meu botão!</p>
                <button class="btn btn-primary btn-lg" type="button">Sou 1 butão</button>
            </div>
        </div>
        )
    }
}


// Componente "App"
function App(props){
    return( 
        <main>
            <div class="container py-4">
                <Destaque texto='Olá, bem vindo ao meu site!'/>
            </div>
        </main>
    )
}

// Comando de renderisação
ReactDOM.render(
    <div>
        <App></App>
    </div>,
    document.getElementById('root')
);