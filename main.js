const first = document.querySelector('.first')
const second = document.querySelector('.second')

document.addEventListener('mousemove', (e) => {
    const x = e.pageX - 5;
    const y = e.pageY - 5;

    first.style.transform = `translate(${x}px,${y}px)`
    second.style.transform = `translate(${x-15}px,${y-15}px)`

})