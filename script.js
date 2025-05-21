const tarefas =[]

function add(){
    const input = document.querySelector('input')
    const tarefa = input.value
    if(tarefa.trim() === '')return
    tarefas.push({texto: tarefa, feito: false})
    
    input.value = ''
    render()
}

function render(){
    const ul = document.querySelector('ul')
    ul.innerHTML = null
    tarefas.forEach(function(t, index){
        const section1 = document.createElement('section')
        const section2 = document.createElement('section')
        const li = document.createElement('li')
        const btnExcluir = document.createElement('button')
        const btnEditar = document.createElement('button')
        const checkbox = document.createElement('input')
        const span = document.createElement('span')

        span.innerText = t.texto
        section2.className = 'section2'
        checkbox.type = 'checkbox'
        checkbox.className = 'checkbox'
        btnExcluir.innerHTML = '<span class="material-symbols-outlined">delete</span>'
        btnExcluir.className = 'btnExcluir'
        btnEditar.innerHTML = '<span class="material-symbols-outlined">edit</span>'
        btnEditar.className = 'btnExcluir'
        
        btnExcluir.onclick = function(){
            tarefas.splice(index, 1)
            render()
        }
        btnEditar.onclick = function(){
            const novaTarefa = prompt('Editar tarefa', t.texto)
            if(novaTarefa !== null && novaTarefa.trim() !== ''){
                t.texto = novaTarefa
            }
            render()
        }

        checkbox.checked = t.feito
        span.style.textDecoration = checkbox.checked ? 'line-through' : 'none'
        span.style.opacity = checkbox.checked ? '0.3' : '1'

        checkbox.onchange = function(){
            t.feito = checkbox.checked
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




