const quotes = [
    {
        quote:"The most wasted of all days is one without laughter.",
        author: "E. E. Cummings"
    },
    {
        quote:"Laughter is the closest distance between two people.",
        author: "Victor Borge"
    },
    {
        quote:"The wisest men follow their own direction.",
        author: "Euripides"
    },
    {
        quote:"The future is much like the present, only longer.",
        author: "Dan Quisenberry"
    },
    {
        quote:"The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote:"We make a living by what we get, we make a life by what we give.",
        author: "Sir Winston Churchill"
    },
    {
        quote:"Life is a moderately good play with a badly written third act.",
        author: "Truman Capote"
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
