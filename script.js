const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const container = document.querySelector('.container');

let yesSize = 1;

// Yeni: Özür yazıları eklenecek div
const apologyContainer = document.createElement('div');
apologyContainer.id = 'apologyContainer';
container.appendChild(apologyContainer);

noBtn.addEventListener('click', () => {
  yesSize += 0.3;
  yesBtn.style.transform = `scale(${yesSize})`;

  // Yeni: Özür mesajı oluştur
  const message = document.createElement('p');
  message.textContent = "Özür dilerim, nolur... son şansım, lütfen 🙏";
  message.className = "apology";
  apologyContainer.appendChild(message);
});

yesBtn.addEventListener('click', () => {
  container.innerHTML = `
    <h1>Teşekkürler, seni çok seviyorum ❤️</h1>
  `;
});
