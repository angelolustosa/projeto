// Quando não declaro o tipo de método usando o fetch, 
// ele entende que é o GET (traz informações)
const response = fetch(`https://jsonplaceholder.typicode.com/users`)
// Promisse que trata o sucesso é o método then(), 
// o parâmetro res recebe o retorno da função anterior
.then(res => {
    console.log(res);
    return res.json();
})
.then(data => {
    console.log(data[0])

    //Usamos para inteirar (percorrer o array), o map()
    // que é um método para percorrer todo o array como um for
    data.map(user => {
        //imprime cada usuário
        console.log(user)
        console.log(`Nome: ${user.name},Email: ${user.email}`)
    })
})
//Promisse que trata o erro é o método catch()
.catch(error => {
    console.log(`Deu erro na busca: ${error}`)
})

// function(res) {
//     return console.log(res)
// }
