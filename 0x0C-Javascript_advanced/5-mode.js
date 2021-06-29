function changeMode(size, weight, transform, background, color ) {
    return () => {
        document.body.style.backgroundColor = background;
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.color = color;
    }
}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const body = document.querySelector('body');
    const newTag = document.createElement('p');
    newTag.textContent = 'Welcome Holberton!';
    body.appendChild(newTag);

    const button1 = document.createElement('button');
    button1.textContent = 'Spooky';
    // button1.onclick = spooky; // both it's works well
    button1.addEventListener("click" ,spooky); // both it's works well
    body.appendChild(button1);

    const button2 = document.createElement('button');
    button2.textContent = 'Dark mode';
    button2.onclick = darkMode;
    body.appendChild(button2);

    const btn3 = document.createElement('button');
    btn3.textContent = 'Scream mode';
    btn3.onclick = screamMode;
    body.appendChild(btn3);
    console.log(btn3)
}
main();
