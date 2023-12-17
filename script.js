var quotes=[
    'The best revenge is massive success.',
    'The best revenge is massive success.',
    'Its not what happens to you, but how you react to it that matters',
    'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
    'You miss 100% of the shots you dont take.',
    'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    'We accept the love we think we deserve.',
    'So, this is my life. And I want you to know that I am both happy and sad and Im still trying to figure out how that could be.',
    'So, this is my life. And I want you to know that I am both happy and sad and Im still trying to figure out how that could be.',
    'I am so clever that sometimes I dont understand a single word of what I am saying',
    'Insanity is doing the same thing, over and over again, but expecting different results.',
    'I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when theyre right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.',
]

function newQuote(){
    var randomNumber= Math.floor(Math.random()*(quotes.length));
    console.log(randomNumber)
    document.getElementById('randomquote').innerHTML=quotes[randomNumber];

}
