
const paragraphs = document.querySelectorAll('main p');

paragraphs.forEach((paragraph) => {
  paragraph.innerHTML += ' <span class="cross">&#x271D;</span>';
});