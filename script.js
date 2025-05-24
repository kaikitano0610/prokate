const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling; // `.answer` 要素を取得

    // `.answer` に `.active` クラスをトグルする
    answer.classList.toggle('active');

    // `.question` に `.open` クラスをトグルする (アイコン変更用)
    question.classList.toggle('open');

    // オプション: 他のFAQを閉じる機能（任意で追加）
    // すべての質問をループして、クリックされた質問以外のアコーディオンを閉じる場合
    questions.forEach((otherQuestion) => {
      if (otherQuestion !== question) {
        otherQuestion.classList.remove('open');
        otherQuestion.nextElementSibling.classList.remove('active');
      }
    });
  });
});

// Hamburger menu functionality
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
    navMenu.classList.toggle('active');
});

// Close menu when a navigation link is clicked (optional)
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('open');
        navMenu.classList.remove('active');
    });
});