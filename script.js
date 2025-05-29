const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let yesSize = 1;

noBtn.addEventListener('click', () => {
  yesSize += 0.3;
  yesBtn.style.transform = `scale(${yesSize})`;
});
