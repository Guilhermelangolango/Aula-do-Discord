function busca(str){
    Array.from(animais.children).forEach(e=>{
        if(e.name.includes(str)) e.removeAttribute('style')
        else e.style.display='none'
    })
}

