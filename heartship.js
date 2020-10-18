window.onload = () => {  
    document.body.classList.remove("preload");
};


function changeColor(ship) {
    switch (ship) {
        case 'bingqiu':
            document.body.style.background = '#dbffeb';
            document.body.style.color = '#872427';
            changeButtonColor('#dbffeb', '#872427');
            break;
        case 'wangxian':
            document.body.style.background = '#d7f2ff';
            document.body.style.color = '#8f0e16';
            changeButtonColor('#d7f2ff', '#8f0e16');
            break;
        case 'hualian':
            document.body.style.background = '#fff3db';
            document.body.style.color = '#9f1018';
            changeButtonColor('#fff3db', '#9f1018');
            break;
        default:
            document.body.style.background = '#0c1524';
            document.body.style.color = '#e3e3e3';
            changeButtonColor('#0c1524', '#e3e3e3');
            break;
    }
}

function changeButtonColor(background, color) {
    var elements = document.getElementsByClassName("ship");
    for(var i=0; i<elements.length; i++) {
        elements[i].style.background = background;
        elements[i].style.borderColor = color;
        elements[i].style.color = color;
    }
}