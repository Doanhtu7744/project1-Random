document.addEventListener('DOMContentLoaded', function () {
  const quoteText = document.getElementById('text');
  const quoteAuthor = document.getElementById('author');
  const newQuoteButton = document.getElementById('new-quote');

  // Function to fetch a random quote
  function getQuote() {
      // You need to implement a way to fetch a random quote, this could be done via API or pre-defined list.
      // For demonstration purposes, let's assume we have a function getRandomQuote() that returns a random quote object.
      const randomQuote = getRandomQuote();
      quoteText.textContent = randomQuote.text;
      quoteAuthor.textContent = randomQuote.author;
  }

  // Event listener for new quote button
  newQuoteButton.addEventListener('click', getQuote);

  // Fetch a random quote on initial load
  getQuote();
});
