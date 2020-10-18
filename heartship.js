window.onload = () => {  
    document.body.classList.remove("preload");
};


function changeColor(ship) {
    switch (ship) {
        case 'bingqiu':
            document.body.style.background = '#dbfff2';
            document.body.style.color = '#872427';
            break;
        case 'wangxian':
            document.body.style.background = '#d7f2ff';
            document.body.style.color = '#8f0e16';
            break;
        case 'hualian':
            document.body.style.background = '#fff3db';
            document.body.style.color = '#9f1018';
            break;
        default:
            document.body.style.background = '#0c1524';
            document.body.style.color = '#e3e3e3';
            break;
    }
}