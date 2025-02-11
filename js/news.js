const API_KEY = "ac9fa5ba697d4ce098f19628e56f1471"; 
// My API Key 
// (I didn't remove this from my code while submitting the project for testing, I know this should not be published publicly)

// Starting page number
let currentPage = 1;
const pageSize = 25;  // Number of articles per page

// Function to fetch and display news
function fetchNews(page) {
    const NEWS_API_URL = `https://newsapi.org/v2/everything?q=internet&language=en&sortBy=publishedAt&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;

    fetch(NEWS_API_URL)
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            if (data.status === "ok") {
                const articles = data.articles; // Get articles for this page
                const source = document.getElementById("news-template").innerHTML;
                const template = Handlebars.compile(source);
                const html = template({ articles });
                document.getElementById("news-container").innerHTML = html;

                // Update pagination buttons
                updatePaginationButtons(data.totalResults);
            } else {
                console.error("Error fetching news:", data.message);
            }
        })
        .catch(error => {
            console.error("Error fetching news:", error);
        });
}

// Function to update pagination buttons
function updatePaginationButtons(totalResults) {
    const totalPages = Math.ceil(totalResults / pageSize);
    const paginationContainer = document.getElementById("pagination-container");

    let buttonsHtml = '';

    // Previous page button
    if (currentPage > 1) {
        buttonsHtml += `<button id="prev" onclick="changePage(${currentPage - 1})">Previous</button>`;
    }

    // Next page button
    if (currentPage < totalPages) {
        buttonsHtml += `<button id="next" onclick="changePage(${currentPage + 1})">Next</button>`;
    }
    paginationContainer.innerHTML = buttonsHtml;
}

// Function to change pages
function changePage(page) {
    currentPage = page;
    fetchNews(currentPage); // Fetch news for the new page
}

// Fetch news for the first page on initial load
fetchNews(currentPage);
