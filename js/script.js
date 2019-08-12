/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
student: David Schultz
******************************************/

// A Quote object contains 5 strings representing a
// quotation, source, citation, year, and tag.
//
// Though citation, year, and tag are optional, in that
// they may be null, quotation and source must always
// be defined as strings.
class Quote {
  // Creates a new Quote object consisting of a quotation,
  // source, tag, citation, and year.
  constructor(quotation, source, tag, citation, year) {
    this.quotation = quotation;
    this.source = source;
    this.tag = tag;
    this.citation = citation;
    this.year = year;
  }
}

var quotes = [];
quotes.push(new Quote('Tesla blows haha',
                      'Elon Musk',
                      'Business',
                      'Twitter',
                      '2019'));

quotes.push(new Quote('Today\'s gunna be one of those days huh',
                      'Brennon Hook',
                      'Humor',
                      'Twitter',
                      '2019'));

quotes.push(new Quote('It is during our darkest moments that we must'
                      + ' focus to see the light.',
                      'Aristotle',
                      'Productivity',
                      null,
                      null));

quotes.push(new Quote('Don\'t judge each day by the harvest you reap'
                      + ' but by the seeds that you plant.',
                      'Robert Louis Stevenson',
                      'Productivity',
                      null,
                      null));

quotes.push(new Quote('It\'s too much of a bother to find another quote.',
                      'David Schultz',
                      'Humor',
                      'Alone, at his computer',
                      '2019'));

// Returns a random quote object
function getRandomQuote() {
  return quotes[Math.floor( Math.random() * 5 )];
}

// Returns a random color
function getRandomColor() {
  var colors = ['#e08dac', '#6a7fdb', '#57e2e5', '#45cb85', '#153131'];
  return colors[Math.floor( Math.random() * 5 )];
}

// Creates and returns a string  of HTML code representing a random
// quote object.
//
// Changes the 'quote-box' innerHTML to said string.
// Changes the background to a random color.
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
  if(q.tag !== null) {
    htmlStr += '<span class="tag">' + q.tag + '</span>';
  }
  htmlStr += '</p>';
  
  document.getElementById('quote-box').innerHTML = htmlStr;
  document.getElementById('body').style.backgroundColor = getRandomColor();
  document.getElementById('loadQuote').style.backgroundColor = getRandomColor();
  return htmlStr;
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
