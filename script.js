
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

function salvar() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

function add() {
    const input = document.querySelector('input')
    const tarefa = input.value
    if (tarefa.trim() === '') return
    tarefas.push({ texto: tarefa, feito: false })
    console.log(tarefas)

    input.value = ''
    render()
    salvar()
}

function render() {
    const ul = document.querySelector('ul')
    ul.innerHTML = null
    tarefas.forEach(function (t, index) {
        const li = document.createElement('li')
        const section1 = document.createElement('section')
        const section2 = document.createElement('section')
        const span = document.createElement('span')
        const btnExcluir = document.createElement('button')
        const btnEditar = document.createElement('button')
        const checkbox = document.createElement('input')

        checkbox.type = 'checkbox'
        checkbox.id = 'checkbox'
        btnEditar.className = 'btn'
        btnExcluir.className = 'btn'
        btnEditar.innerHTML = '<span class="material-symbols-outlined">edit</span>'
        btnExcluir.innerHTML = '<span class="material-symbols-outlined">delete</span>'
        span.innerText = t.texto

        btnExcluir.onclick = function () {
            tarefas.splice(index, 1)
            render()
        }
        btnEditar.onclick = function () {
            const novaTarefa = prompt('Digite sua tarefa')
            if (novaTarefa !== null) {
                t.texto = novaTarefa
                render()
                salvar()
            }
        }
        checkbox.checked = t.feito
        span.style.textDecoration = checkbox.checked ? 'line-through' : 'none'
        span.style.opacity = checkbox.checked ? '0.3' : '1'
        checkbox.onchange = function () {
            t.feito = checkbox.checked
            salvar()
            span.style.textDecoration = checkbox.checked ? 'line-through' : 'none'
            span.style.opacity = checkbox.checked ? '0.3' : '1'
        }

        ul.appendChild(li)
        li.appendChild(section2)
        section2.appendChild(checkbox)
        section2.appendChild(span)

        li.appendChild(section1)

        section1.appendChild(btnEditar)
        section1.appendChild(btnExcluir)
    })
}
render()




