function kleurDiv() {
    const el = document.getElementById('kleur-hier');
    el.style.backgroundColor = 'red';
}

document.getElementById('button').addEventListener('click', kleurDiv);
