// -------------------------------------------------tecnica: INTERPOLAÇÃO-------------------------------------------------------------
// function Titulo(){

//     let nome = 'Tetheuzinho'; /* 👈 Isso é uma interpolação */
//     const soma = 10 + 10;
//     const urlImg = 'https://th.bing.com/th/id/R.cdd987a864f78d318fe29374222deaa7?rik=clj7bsEvTtAzGg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f3%2fUnicorn-PNG-Transparent-Image.gif&ehk=cUnSbKSu9eFFJKjP4CAGG8t4pSEGFdOFQCi%2fVUq9o74%3d&risl=&pid=ImgRaw&r=0';

//     return (
//         <div>
//             <h1>Oi eu sou {nome}!</h1>
//             <img src={urlImg} alt="Uniconio" width={150}/>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut accusamus rem earum. Necessitatibus expedita, voluptas esse tenetur, illum iure quae placeat dolorem architecto soluta officiis eum dignissimos? Recusandae, doloremque?</p>
//         </div>
//     )
// }

// export default Titulo

// -------------------------------------------------tecnica: PROPS-----------------------------------------------------------
// function Titulo({cor, nome, paragrafo}){

//     return (
//         <div>
//             <h1 style={{color:cor}}>Oi eu sou {nome ? nome : 'Fulano'}!</h1>
//             { paragrafo ? 
//                 <p style={{color:cor}}>🌟 Olá, sou o {nome}! Um ser humano repleto de fofura e simpatia. 🌟 <p></p>
//                 <li> - Hobbies: Adoro abraços apertados, assistir a filmes fofos e espalhar positividade por aí.</li>
//                 <li> - Personalidade: Sou como um abraço quentinho em um dia frio de inverno. Sempre com um sorriso no rosto e pronto para fazer alguém sorrir também.</li>
//                 <li> - Superpoderes: Tenho a habilidade de transformar qualquer situação em algo mais leve e agradável. 🌈</li> 
//                 <li> - Amigos dizem: “{nome} é o tipo de pessoa que aquece nossos corações e nos faz acreditar que o mundo pode ser um lugar melhor.”</li>
//                 <p>Se você precisar de um ombro amigo ou de alguém para compartilhar sorrisos, estou aqui! 😊💕</p>
//                 </p>
//                 : 
//                 <p style={{color:cor}}>Nada</p>
//             }
//         </div>
//     )
// }

// export default Titulo




// -------------------------------------------------tecnica: ESTADOS-----------------------------------------------------------
import { useState } from "react";

function Titulo({cor}){
    const [texto, setTexto] = useState("Um título do estado inicial")
    const [inputText, setInputTexto] = useState("");

    function clicou(){
        setTexto(inputText);
    }

    return (
        <div>
            <h1 style={{color:cor}}>{texto}</h1>
            <input value={inputText} onChange={(e)=>{setInputTexto(e.target.value)}} type="text" />
            <button onClick={clicou}>Mudar</button>
        </div>
    )
}

export default Titulo

