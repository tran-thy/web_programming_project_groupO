const BACKEND_ROOT_URL = "http://localhost:3001";

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BACKEND_ROOT_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

//Render Recipe
const renderVietnameseDish = async (id) => {
  try {
    const vietnameseDishData = await fetchData(`Vietnamese_Recipes/${id}`);
    displayDish(vietnameseDishData);
  } catch (error) {
    alert(error.message);
  }
};

//Render Comments
const getCommentsData = async (id) => {
  try {
    const cmtData = await fetchData(`cmt/${id}`);
    return cmtData;
  } catch (error) {
    throw new Error(`Error retrieving comments data: ${error.message}`);
  }
};

const renderComments = async (id) => {
  try {
    // Set the value of the dishId input field
    document.getElementById("dishId").value = id;

    const cmtData = await getCommentsData(id);
    displayComments(cmtData);
  } catch (error) {
    document.getElementById("error-message").textContent = error.message;
  }
};

//Display Recipe
const displayDish = (dish) => {
  const dishNameElement = document.getElementById("dish-name");
  const dishDescriptionElement = document.getElementById("dish-description");
  const dishHistoryElement = document.getElementById("dish-history"); // New
  const dishImageElement = document.getElementById("dish-image");
  const recipeIngredientsElement =
    document.getElementById("recipe-ingredients");
  const recipeInstructionsElement = document.getElementById(
    "recipe-instructions"
  );
  const dishVideoElement = document.querySelector(".iframe-container iframe"); // New

  dishNameElement.textContent = dish.dishname;
  dishDescriptionElement.textContent = dish.dishdescription;
  dishHistoryElement.textContent = dish.dishhistory; // New
  dishImageElement.src = dish.dishimage;
  // Extract and embed YouTube video if available
  if (dish.dishvideo) {
    const videoId = dish.dishvideo.split("v=")[1];
    if (videoId) {
      const embeddedUrl = `https://www.youtube.com/embed/${videoId}`;
      dishVideoElement.src = embeddedUrl;
    }
  }

  // Populate Ingredients
  dish.recipeingredients.split(",").forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient.trim();
    recipeIngredientsElement.appendChild(li);
  });

  // Populate Instructions
  dish.recipeinstruction.split("_").forEach((instruction) => {
    const li = document.createElement("li");
    li.textContent = instruction.trim();
    recipeInstructionsElement.appendChild(li);
  });
};

//Display Comment

const displayComments = (cmtData) => {
  const commentsContainer = document.getElementById("comments-container");
  commentsContainer.innerHTML = "";

  cmtData.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = `
      <p><strong>${comment.commenter_name}</strong>: ${comment.comment_content}</p>
      <p><em>${comment.created_at}</em> <button class="delete-btn" data-id="${comment.comment_id}">Delete</button></p>
    `;
    commentsContainer.appendChild(commentElement);
  });

  // Add event listeners to delete buttons

  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const commentId = parseInt(button.getAttribute("data-id"));
      try {
        await deleteComment(commentId);
        renderComments(document.getElementById("dishId").value); // Re-render comments after deletion
      } catch (error) {
        alert(error.message);
      }
    });
  });
};

//Render PostComments
const postComment = async (name, content, id) => {
  try {
    const response = await fetch(`${BACKEND_ROOT_URL}/cmt/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        commenter_name: name,
        comment_content: content,
        dishId: id,
      }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // Show success message after posting comment
    document.getElementById("success-message").style.display = "block";
    return data;
  } catch (error) {
    throw new Error(`Error adding comment: ${error.message}`);
  }
};

const deleteComment = async (commentId) => {
  try {
    const response = await fetch(
      `${BACKEND_ROOT_URL}/cmt/delete/${commentId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete comment");
    }
  } catch (error) {
    throw new Error(`Error deleting comment: ${error.message}`);
  }
};

document
  .getElementById("comment-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const commenterName = formData.get("commenter_name");
    const commentContent = formData.get("comment_content");
    const dishId = formData.get("dishId");

    try {
      await postComment(commenterName, commentContent, dishId);
      renderComments(dishId);
      event.target.reset();
    } catch (error) {
      alert(error.message);
    }
  });

// Get the dish ID from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const dishId = urlParams.get("id");

// renderVietnameseDish("VN-0002"); //test
// renderComments("VN-0002"); //test

//Render the Vietnamese dish using the retrieved dishId
renderVietnameseDish(dishId);
renderComments(dishId);
