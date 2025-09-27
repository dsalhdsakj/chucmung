const messages = [
  "Chúc mừng sinh nhật nha! 🎂",
  "Happy Birthday! Chúc cậu tuổi mới rực rỡ! ✨",
  "Sinh nhật vui vẻ, hạnh phúc và thành công nhé! 🚀",
  "Chúc cậu một ngày sinh nhật thật ý nghĩa và đáng nhớ! 💖",
  "Tuổi mới nhiều niềm vui mới, thắng lợi mới nha! 🥳",
  "Chúc mọi điều tốt đẹp nhất sẽ đến với cậu trong hôm nay! 🍀",
  "Luôn vui vẻ, tươi trẻ và yêu đời nhé! 😊"
];

function generateRandomNotifications() {
  const audio = document.getElementById('nhacNen');
  audio.play();
  const notificationCount = 100;

  for (let i = 0; i < notificationCount; i++) {
    setTimeout(() => {
      const notification = document.createElement('div');
      notification.className = 'notification';

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      notification.innerHTML = `
        <div class="notification-header">
          <button class="minimize-btn" onclick="minimizeNotification(this)">–</button>
          <span>🎂🎂🎂</span>
        </div>
        <p>${randomMessage}</p>
      `;

      const x = Math.random() * (window.innerWidth - 240);
      const y = Math.random() * (window.innerHeight - 160);
      notification.style.left = `${x}px`;
      notification.style.top = `${y}px`;

      document.body.appendChild(notification);
    }, i * 500);
  }
}

function minimizeNotification(button) {
  const notification = button.closest('.notification');
  notification.style.display = 'none'; 
}

document.addEventListener("DOMContentLoaded", function () {
  var encodedText = '&#68;&#101;&#115;&#105;&#103;&#110;&#32;&#98;&#121;&#32;&#80;&#97;&#110;&#98;&#97;&#112;';
  var footer = document.createElement("a");
  footer.innerHTML = encodedText; 
  document.body.appendChild(footer); 
});
