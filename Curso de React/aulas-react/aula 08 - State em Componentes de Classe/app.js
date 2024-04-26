// Componente de CLASSE
// Para fazer um componente por meio de class é preciso seguir a seguinte extrutura:
class Destaque extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nome: 'Matheus'
        }
    }

    trocaNome = () => {
        this.setState(function(prevState){
            return { nome: prevState.nome = 'Lufano'}
        })
    }


    render(){
        return(
        // aqui monda o componete.
            <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">{this.state.nome}</h1>
                    <p class="col-md-8 fs-4">Aprendendo Statu!</p>
                    <button onClick={this.trocaNome} class="btn btn-primary btn-lg" type="button">Trocar nome</button>
                </div>
            </div>
        )
    }
}

class Comtador extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    add = () => {
        this.setState(function(prevState){
            return { count: prevState.count + 1}
        })
    }

    sub = () => {
        this.setState(function(prevState){
            return { count: prevState.count - 1}
        })
    }


    render(){
        return(
        // aqui monda o componete.
            <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Contador = {this.state.count}</h1>
                    <p class="col-md-8 fs-4">Aprendendo Statu!</p>
                    <div class = 'row gap-5'>
                        <button onClick={this.sub} class="col btn btn-danger btn-lg" type="button">Sub (-)</button>
                        <button onClick={this.add} class="col btn btn-success btn-lg" type="button">Add (+)</button>
                    </div>
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
                <Comtador/>
                <Destaque texto='Olá, bem vindo ao meu site!'/>
                <Comtador/>
                <Comtador/>

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