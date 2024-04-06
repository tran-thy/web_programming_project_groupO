const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment');
const commentList = document.getElementById('comment-list');

// Function to add a new comment to the list
function addComment(comment) {
    const li = document.createElement('li');
    li.textContent = comment;
    commentList.appendChild(li);
}

// Event listener for form submission
commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newComment = commentInput.value.trim();
    if (newComment !== '') {
        addComment(newComment);
        commentInput.value = '';
        // Here you can add code to send the comment to the server using fetch or XMLHttpRequest
    }
});