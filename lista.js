function Submit(){
    const valor = document.querySelector('[data-form-input]')
    const lista = document.querySelector('[data-task]')

    console.log(valor.value)

    const novo_item_lista = document.createElement("li")
    novo_item_lista.innerHTML = valor.value

    lista.appendChild(novo_item_lista)

}
