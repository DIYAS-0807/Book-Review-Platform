// Load saved reviews from localStorage on page load
window.onload = function () {
  loadReviews();
};

function addReview() {
  const title = document.getElementById("bookTitle").value.trim();
  const author = document.getElementById("bookAuthor").value.trim();
  const review = document.getElementById("bookReview").value.trim();

  if (!title || !author || !review) {
    alert("Please fill in all fields.");
    return;
  }

  const reviewData = { title, author, review };
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push(reviewData);
  localStorage.setItem("reviews", JSON.stringify(reviews));

  displayReview(reviewData);
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
