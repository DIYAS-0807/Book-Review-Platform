function addReview() {
  const title = document.getElementById("bookTitle").value.trim();
  const author = document.getElementById("bookAuthor").value.trim();
  const review = document.getElementById("bookReview").value.trim();

  if (!title || !author || !review) {
    alert("Please fill in all fields.");
    return;
  }

  const reviewList = document.getElementById("reviewList");

  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <strong>${title}</strong> by ${author}
    <p>${review}</p>
  `;

  reviewList.appendChild(listItem);

  // Clear inputs
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookAuthor").value = "";
  document.getElementById("bookReview").value = "";
}
