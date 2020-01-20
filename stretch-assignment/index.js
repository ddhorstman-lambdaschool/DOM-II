document.querySelector('.blocks').addEventListener('click', event =>
    event.target.parentNode.prepend(event.target)
);
document.querySelector('.blocks').addEventListener('mousedown', event => {
    let style = event.target.style.transform || "translateX(0)";
    let translate = parseInt(style.slice(style.indexOf("(") + 1, style.indexOf(")"))) + 1;
    event.target.style.transform = "scaleX(" + translate + ")"; 
    //event.target.style.transform = "translateX("+translate+")";
    console.log(event.target.style.transform);
});