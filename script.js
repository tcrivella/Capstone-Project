function myFunction() {
    alert("Thank you for your submission!");
}

// Search bar code I got from chatgpt but it's not working 

// Get the necessary elements from the DOM
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

// Function to perform the search
function performSearch() {
  // Get the search query from the input field
  const query = searchInput.value;

  // Clear previous search results
  searchResults.innerHTML = '';

  // Perform the search operation (replace this with your own search logic)
  const results = performSearchOperation(query);

  // Display the search results
  results.forEach(result => {
    const resultElement = document.createElement('p');
    resultElement.textContent = result;
    searchResults.appendChild(resultElement);
  });
}

// Function to simulate the search operation (replace this with your own search logic)
function performSearchOperation(query) {
  // Example search operation with hardcoded results
  const data = [
    'Result 1',
    'Result 2',
    'Result 3',
    'Result 4',
    'Result 5'
  ];

  // Filter the data based on the query
  const filteredResults = data.filter(result => result.includes(query));

  return filteredResults;
}

// Add event listener to the search button
searchButton.addEventListener('click', performSearch);

// Add event listener to the input field for pressing Enter key
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    performSearch();
  }
});
