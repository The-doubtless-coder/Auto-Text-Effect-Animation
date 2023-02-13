const array = [
  "a YouTuber.",
  "I am that I am.",
  "a backend developer.",
  "a front end developer.",
  "a logical being.",
  "an illogical being.",
];

const divEl = document.querySelector(".container");

let index = 0;
index = Math.floor(Math.random() * 6);
let charIndex = 1;
updateIndex();

function updateIndex() {
  divEl.innerHTML = `<span>
            I am ${array[index].slice(0, charIndex + 1)}
        </span>`;

  charIndex++;
  if (charIndex === array[index].length) {
    index = index = Math.floor(Math.random() * 6);
    charIndex = 0;
  }
  setTimeout(() => {
    updateIndex();
  }, 300);
}
