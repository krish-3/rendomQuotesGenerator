$("button").click(function() {
    var quotes = {
        "― Albert Einstein": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "― Mahatma Gandhi": "Be the change that you wish to see in the world.",
        "― Mahatma Gandhi": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "― William Shakespeare": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        "― Thomas A. Edison": "I have not failed. I've just found 10,000 ways that won't work.",
        "― Mother Teresa":"If you judge people, you have no time to love them.",
        "― Mother Teresa":"Not all of us can do great things. But we can do small things with great love."
    }
    var authors=Object.keys(quotes);
var author = authors[Math.floor(Math.random()*authors.length)];
var quote = quotes[author];
$("#quote").html(quote);
$("#author").html(author);
})

