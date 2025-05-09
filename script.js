// When the page loads, grab any saved reviews and display them
window.onload = function () {
  loadReviews();
};

function addReview() {
  const title  = document.getElementById("bookTitle").value.trim();
  const author = document.getElementById("bookAuthor").value.trim();
  const review = document.getElementById("bookReview").value.trim();

  if (!title || !author || !review) {
    alert("Please fill in all fields.");
    return;
  }

  // Build our review object
  const reviewData = { title, author, review };

  // Read existing reviews (or start with an empty array)
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  // Add the new one
  reviews.push(reviewData);

  // Save back to localStorage
  localStorage.setItem("reviews", JSON.stringify(reviews));

  // Immediately display it on the page
  displayReview(reviewData);

  // Clear the form inputs
  clearForm();
}

function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.forEach(displayReview);
}

function displayReview({ title, author, review }) {
  const reviewList = document.getElementById("reviewList");
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <strong>${title}</strong> by ${author}
    <p>${review}</p>
  `;
  reviewList.appendChild(listItem);
}

function clearForm() {
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookAuthor").value = "";
  document.getElementById("bookReview").value = "";
}
