const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const apologyContainer = document.getElementById('apologyContainer');
const contentArea = document.getElementById('contentArea');

let yesSize = 1;

noBtn.addEventListener('click', () => {
  yesSize += 0.3;
  yesBtn.style.transform = `scale(${yesSize})`;

  const message = document.createElement('p');
  message.textContent = "Özür dilerim, nolur... son şansım, lütfen 🙏";
  message.className = "apology";
  apologyContainer.appendChild(message);
});

yesBtn.addEventListener('click', () => {
  contentArea.innerHTML = `
    <h1>Teşekkürler, seni çok seviyorum ❤️</h1>
  `;
});
