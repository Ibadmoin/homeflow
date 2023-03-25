

// news slider functionality//
var newsItems = document.querySelectorAll('.news-item');
var dotsContainer = document.querySelector('.dots-container');
var currentNewsIndex = 0;

function showNextNewsItem() {
  // Hide the current news item
  newsItems[currentNewsIndex].classList.remove('active');
  dots[currentNewsIndex].classList.remove('active');
  
  // Increment the news index
  currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
  
  // Show the next news item
  newsItems[currentNewsIndex].classList.add('active');
  dots[currentNewsIndex].classList.add('active');
}

// Create the dots and add event listeners to them
var dots = [];
for (var i = 0; i < newsItems.length; i++) {
  var dot = document.createElement('span');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
  dots.push(dot);
  
  // Add an event listener to each dot
  dot.addEventListener('click', function(index) {
    return function() {
      // Hide the current news item and dot
      newsItems[currentNewsIndex].classList.remove('active');
      dots[currentNewsIndex].classList.remove('active');
      
      // Update the current news index and show the corresponding news item and dot
      currentNewsIndex = index;
      newsItems[currentNewsIndex].classList.add('active');
      dots[currentNewsIndex].classList.add('active');
    };
  }(i));
}

// Show the first news item and dot
newsItems[currentNewsIndex].classList.add('active');
dots[currentNewsIndex].classList.add('active');

// Call the showNextNewsItem function every 5 seconds
setInterval(showNextNewsItem, 5000);
