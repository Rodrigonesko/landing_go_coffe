function imgSlider(anything) {
    console.log('fui clicado')
    document.querySelector('.gocoffe').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
    menuToggle.classList.toggle('active');
}