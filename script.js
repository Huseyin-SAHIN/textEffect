const contentElement = document.querySelector(".page-content");
const contentText = "Hello and welcome! My name is Hüseyin, and I am a passionate computer engineer and front-end developer. I have several years of experience in developing websites and web applications, and I enjoy creating innovative and user-friendly interfaces. When I'm not coding, you can find me hiking in the mountains or exploring new cuisines. Thank you for visiting my website, and I hope to work with you soon!";

const speed = 100; // animasyon hızı (ms)
let index = 0;

function writeText() {
    contentElement.textContent = contentText.slice(0, index);
    index++;

    if (index === contentText.length + 1) {
        clearInterval(word);
    };
};

writeText();
let word = setInterval(writeText, speed);
