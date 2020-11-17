const colors = ['green','red','rgba(133,122,200)','#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    // get ramdom number between 0 - 3
    const randomNumber = getRamdomNum();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = randomNumber;
})

getRamdomNum = () => {
    return Math.floor(Math.random()*colors.length);
}