
//class contato

class Contato {

    constructor (nome, sobrenome, email, cpf, telefone, contato) {

        this.nome = nome;
        this.sobrenome = sobrenome;
        this. email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;

    }
}


function Post(form) {

  let data = new Contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value)

            return data;

}



function Enviar(event) {     

    event.preventDefault();

    const form = event.target;

    let data = Post(form);  

    if (data.nome != "") {
        alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
        form.reset();

    console.log(data.nome);
    console.log(data.email)
    console.log(data.cpf);
    console.log(data.sobrenome);
    console.log(data.telefone);
    console.log(data.contato);

    }   



}