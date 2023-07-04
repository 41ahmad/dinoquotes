const quotes = [
  "Quote 1",
  "Quote 2",
  "Quote 3"
];

const button = document.querySelector("button");
const quoteDisplay = document.querySelector("#quote-display");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteDisplay.textContent = randomQuote;
});
