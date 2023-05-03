var links = document.getElementById('links')
function menu(){
    if (links.style.display == 'none'){
        links.style.display = 'block'
    }else{
        links.style.display = 'none'
    }
    
}

function tamanho(){
    if(window.innerWidth >= 481){
        links.style.display = 'block'
    }else{
        links.style.display = 'none'
    }
}