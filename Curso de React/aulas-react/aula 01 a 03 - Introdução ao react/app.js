// // CRIAR ELEMENTO COM JAVASCRIPT PURO!
// // IMPERATIVO, o codigo tem que ser declarado passo a passo.
// const h1 = document.createElement('h1');
// h1.textContent = "Olá mundo JS!";
// h1.className = "header";
// document.getElementById("root").append(h1);
// console.log(h1);


// // Usando o JSX, sua declaração é mais curta e rapida:
// // Criando um objeto de forma declarativa:
// const elemento = <h1 className="header">Olá, Mundo JSX!</h1>;
// console.log(elemento);


// //BÁSICO DO REACT
// ReactDOM.render(
//     elemento,
//     document.getElementById("root")
// )


// ------------------------------ JSX -----------------------------------

// jsx aceita esprexões.
function nomeCompleto(user){
    return user.nome + ' ' + user.sobrenome
}


const nome = "Matheus Lufano"


const usuario = {
        nome: "Matheus",
        sobrenome: "Lufano"
}


const pagina = (
        <div>
        <h1 className="header">Olá {nome}!</h1>
        <p>Isso é um parágrafo</p>
        </div>
)


const elemento = <h1 className="header">{pagina}</h1>

ReactDOM.render(
    elemento,
    document.getElementById("root")
)