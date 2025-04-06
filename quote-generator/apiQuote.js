document.addEventListener('DOMContentLoaded', () => {
    const quoteContainer = document.getElementById('quote-container');
    const quoteInput = document.getElementById('quote-heading');
    const quoteAuthor = document.getElementById('quote-author');
    const quoteType = document.getElementById('quote-type');
    const generateQuoteBtn = document.getElementById('get-quote-btn');

    generateQuoteBtn.addEventListener('click', async () => {
        try {
            const quote = await getRandomQuote();
            displayQuote(quote);
        } catch (error) {
            console.log(error);
        }
    });

    async function getRandomQuote() {
        let url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
        const response = await fetch(url);
        console.log(typeof response);
        console.log(response);

        if (!response.ok) {
            throw new Error("Sorry unable to load");
        }

        const quote = await response.json();
        return quote;
    }

    function displayQuote(quote) {
        console.log(quote);
        const { data } = quote;
        quoteInput.textContent = `Quote: ${data.content}`;
        quoteAuthor.textContent = `Author: ${data.author}`;
        quoteType.textContent = `Type: ${data.tags[0]}`;
    }
});