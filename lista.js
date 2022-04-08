
function DeleteItem(){
    console.log(this.parentElement)
    this.parentElement.remove()
}
function EditItem(){
    let FatherElement = this.parentElement
    console.log(FatherElement)
    
    FatherElement.innerHTML = '';
    const novo_item_lista = document.createElement('input');
     
    FatherElement.appendChild(novo_item_lista)

    FatherElement.appendChild(CriarBotaoEdit())
    
    FatherElement.appendChild(CriarBotaoConcluido()) 
    
}
function ConcluidoItem(){
    var input_element = this.parentElement.children[0]
    console.log(input_element.value)
    console.log(this.parentElement)
    lista = this.parentElement
    this.parentElement.innerHTML = input_element.value

    lista.appendChild(CriarBotaoDelete())

    lista.appendChild(CriarBotaoEdit())
}

function CriarBotaoConcluido(){
    const botao_concluido =  document.createElement('button')
    botao_concluido.classList.add("btn", "btn-success")
    botao_concluido.innerHTML = "Concluido"
    botao_concluido.type = "button"
    botao_concluido.addEventListener("click", ConcluidoItem);

    return botao_concluido
}
function CriarBotaoDelete(){
    const botao_delete =  document.createElement('button')
    botao_delete.classList.add("btn", "btn-danger")
    botao_delete.innerHTML = "Delete"
    botao_delete.type = "button"
    botao_delete.addEventListener("click", DeleteItem);

    return botao_delete
}
function CriarBotaoEdit(){
    const botao_edit =  document.createElement('button')
    botao_edit.classList.add("btn", "btn-warning")
    botao_edit.innerHTML = "Edit"
    botao_edit.type = "button"
    botao_edit.addEventListener("click", EditItem);

    return botao_edit
}

function Submit(){
    const lista = document.querySelector('[data-task]')
    
    const valor = document.querySelector('[data-form-input]')

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    novo_item_lista.innerHTML = valor.value
 
    novo_item_lista.appendChild(CriarBotaoDelete())
    novo_item_lista.appendChild(CriarBotaoEdit())

    lista.appendChild (novo_item_lista)

    document.getElementById("item").value = ""
}