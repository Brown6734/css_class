var tiles = document.querySelector(`#tiles`);

tiles.addEventListener(`click`, openClose)

function openClose(e){
    var nav = document.querySelector(`nav`);
    nav.classList.toggle(`hidden`);
}

/*
element.addEventListener(event, functionName)
event = click

function functionName{



}
css notes:

class.gallery{
    stuff in here
}

class.gallery img{
    stuff in here
}

class.desc{
    stuff in here
}




*/ 