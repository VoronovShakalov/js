const text = document.querySelector('#textarea')
const add = document.querySelector('#add')
const plitka = document.querySelector('#plitka')

add.addEventListener('click', ()=> {
    plitka.innerHTML = `
    <p id='stiker'> ${text.value} </p>
    <button id="edit">Редактировать</button>
    <button id="delete">Удалить</button>
    `
    const stiker = document.querySelector('#stiker')
    const edit = document.querySelector('#edit')
    const del = document.querySelector('#delete')

    edit.addEventListener('click', ()=> {
        stiker.innerHTML = `${text.value}`
    
    })

    del.addEventListener('click', ()=> {
        plitka.innerHTML = `
    `

    
    })
})


