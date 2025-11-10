// DOM - документ Object Model

// querySelector - если нету айди но можно с айди

// getElementByIf

// innerHTML - тегтин ичиндиге контенти киргизет

// innerText 

const changeBlock = () => {
    let div = document.getElementById('block')
    div.style.width='400px'
    div.style.height="100px"
    div.style.borderRadius='16px'
    div.style.backgroundColor='green'
}

const changeBlock2 = () => {
    let div = document.getElementById('block2')
    div.style.width='100px'
    div.style.height="100px"
    div.style.borderRadius='50%'
    div.style.backgroundColor='blue'
}

const changeBlock3 = () => {
    let div = document.getElementById('block3')
    div.style.width='100px'
    div.style.height="100px"
    div.style.borderRadius='16px'
    div.style.backgroundColor='red'
}


