/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
class Quote {
  constructor(quotation, source, citation, year) {
    this.quotation = quotation;
    this.source = source;
    this.citation = citation;
    this.year = year;
  }
}

var quotes = [new Quote('I love you the more in that I believe you had'
                        + ' liked me for my own sake and for nothing'
                        + ' else.',
                        'John Keats',
                        null,
                        null),
              
              new Quote('The best and most beautiful things in the world'
                        + ' cannot be seen or even touched - they must be'
                        + ' felt with the heart.',
                       'Helen Keller',
                       null,
                       null),
              
              new Quote('It is during our darkest moments that we must'
                       + ' focus to see the light.',
                       'Aristotle',
                       null,
                       null),
              
              new Quote('Don\'t judge each day by the harvest you reap'
                        + ' but by the seeds that you plant.',
                       'Robert Louis Stevenson',
                       null,
                       null),
              
              new Quote('It\'s too much of a bother to find another'
                       + ' quote.',
                       'David Schultz',
                       'Alone, at his computer',
                       '2019')];
console.log(quotes);


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  var rand = Math.floor( Math.random() * 5 );
  return quotes[rand];
}
console.log(getRandomQuote());

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  var q = getRandomQuote();
  var htmlStr = '<p class="quote">' + q.quotation + '</p>' +
                '<p class="source">' + q.source;
  if(q.citation !== null) {
    htmlStr += '<span class="citation">' + q.citation + '</span>';  
  }
  if(q.year !== null) {
    htmlStr += '<span class="year">' + q.year + '</span>';
  }
  htmlStr += '</p>';
  return htmlStr;
}

console.log(printQuote());


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.