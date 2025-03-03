// document.getElementById("contactForm").addEventListener("submit", function(event) {
//   event.preventDefault();

//   let botToken = "7570433967:AAFepyJ5WXLukXwE_98vadAa6ZFyL1s5Z2Q";  // Replace with your actual Bot Token
//   let chatId = "2078260949";  // Your Telegram Chat ID

//   let message = `📩 *New Contact Form Submission*\n\n👤 Name: ${document.getElementById("name").value}\n📧 Email: ${document.getElementById("email").value}\n📝 Message: ${document.getElementById("message").value}`;

//   let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

//   fetch(url)
//       .then(response => response.json())
//       .then(data => {
//           if (data.ok) {
//               alert("Message sent successfully to Telegram!");
//               document.getElementById("contactForm").reset();
//           } else {
//               alert("Failed to send message.");
//           }
//       })
//       .catch(error => console.error("Error:", error));
// });

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let botToken = "7570433967:AAFepyJ5WXLukXwE_98vadAa6ZFyL1s5Z2Q";  // Replace with actual Bot Token
  let chatId = "2078260949";  // Replace with your Telegram Chat ID

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value; // Fetch phone number
  let message = document.getElementById("message").value;

  let telegramMessage = `📩 *New Contact Form Submission*\n\n👤 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n📝 Message: ${message}`;

  let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(telegramMessage)}&parse_mode=Markdown`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          if (data.ok) {
              alert("Message sent successfully to Sunil!");
              document.getElementById("contactForm").reset();
          } else {
              alert("Failed to send message.");
          }
      })
      .catch(error => console.error("Error:", error));
});




window.addEventListener('load', () => {
    document.getElementById('loading').style.display = 'none';
  });
  const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
