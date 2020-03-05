// Your code goes here
document.querySelectorAll('.nav-link').forEach(
    x => x.addEventListener('click',
        event => {
            event.preventDefault();
            event.stopPropagation();
            let size = event.target.style.fontSize || "1.6rem";
            let newSize = parseFloat(size.slice(0, -3)) + 0.2 + "rem";
            event.target.style.fontSize = newSize;
        }
    )
);
function rand(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
document.querySelector('.main-navigation').addEventListener(
    'click', event => {
        event.target.style.backgroundColor = "rgb(" + rand(255) + "," + rand(255) + "," + rand(255) + ")";
    }
);
const introImg = document.querySelector('.intro img');
introImg.addEventListener(
    'mousedown', e =>
    e.target.style.transform = 'scale(1.5)'
);
introImg.addEventListener(
    'mouseup', e =>
    e.target.style.transform = 'scaleX(1.0)'
);
document.querySelectorAll('section h2, section p, header h2, header p').forEach(
    x => x.addEventListener(
        'mouseenter', e =>
        e.target.style.backgroundColor = 'red'
    )
);
document.querySelectorAll('section h2, section p, header h2, header p').forEach(
    x => x.addEventListener(
        'mouseleave', e =>
        e.target.style.backgroundColor = 'inherit'
    )
);
window.addEventListener('resize', () =>
    document.querySelector('html').style.backgroundColor = "pink"
);
window.addEventListener('scroll', () =>
    document.querySelector('html').removeAttribute('style')
);

document.querySelectorAll('section img').forEach(x =>
    x.addEventListener('dblclick', event =>
        event.target.style = 'visibility: hidden'
    )
);
document.addEventListener('keydown', event => 
    document.querySelectorAll('p').forEach( x => {
       if(!x.temp)x.temp=x.textContent;
        x.textContent += event.key;
    })
);
document.addEventListener('keyup', () =>
    document.querySelectorAll('p').forEach( x => {
        if(x.temp){
            x.textContent = x.temp;
            x.removeAttribute('temp');
        }
    })
);