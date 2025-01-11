let quotes = [
    {
        "quote": "Success is most often achieved by those who don't know that failure is inevitable.",
        "author": "Coco Chanel"
    },

    {
        "quote": "Things work out best for those who make the best of how things work out.",
        "author": "Johnson Wooden"
    },
    {
        "quote": "Courage is grace under pressure.",
        "author": "Ernest Hemingay"
    },
    {
        "quote": "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        "author": "Jim Rohn"
    },
    {
        "quote": "Learn from yesterday, live for today. hope for tomorrow, the important thing is not to stop questioning.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Sometimes you can't see yourself clearly until you see yourself through the eyes of others.",
        "author": "Ellen DeGeneres"
    },
    {
        "quote": "All our dreams can come true if we have the courage to pursue them.",
        "author": "Walt Disney"
    },
    {
        "quote": "It does not matter how slowly you go, so long as you do not stop.",
        "author": "Confucius"
    },
    {
        "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
        "author": "Winston Churchill"
    },
    {
        "quote": "Someone is sitting in the shade today because someone planted a tree a long time ago. .",
        "author": "Warren Buffett"
    },
]


const $btn = $("#btn")

$btn.click(function(){
    let number = Math.floor(Math.random() * quotes.length);
    $('#quote').html('<span>"</span>' + quotes[number].quote + '</span>"<span class=');
    $('#author').html('<span>--</span>' + quotes[number].author);
});