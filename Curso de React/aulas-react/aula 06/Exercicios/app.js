// Componente "App"
function App(props){
    return( 
        <main>
            <div class="container py-4">

                <Header></Header>
                <Destaque></Destaque>
                <div class="row align-items-md-stretch">

                    <div class="col-md-6">
                        <Card tema="dark"></Card>
                    </div>

                    <div class="col-md-6">
                        <Card></Card>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </main>
    )
}

// React
ReactDOM.render(
    <div>
        <App></App>
    </div>,
    document.getElementById('root')
);