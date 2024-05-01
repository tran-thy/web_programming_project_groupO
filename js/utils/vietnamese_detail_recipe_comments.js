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

// Function to display comments
const displayComments = (cmtData) => {
  const commentsContainer = document.getElementById("comments-container");
  commentsContainer.innerHTML = "";
  cmtData.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = `
              <p><strong>${comment.email}</strong>: ${comment.content}</p>
              <p><em>${new Date(
                comment.created_at
              ).toLocaleString()}</em> <button class="delete-btn" data-id="${
      comment.id
    }">Delete</button></p>
          `;
    commentsContainer.appendChild(commentElement);
  });
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const commentId = parseInt(button.getAttribute("data-id"));
      try {
        await deleteComment(commentId);
        renderComments(document.getElementById("dishId").value);
      } catch (error) {
        alert(error.message);
      }
    });
  });
};

// Function to submit a comment
const submitComment = async (content, dishId, userId) => {
  try {
    // Send request to create comment
    const response = await fetch(`${BACKEND_ROOT_URL}/cmt/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        dishid: dishId,
        user_id: userId,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to post comment");
    }
    renderComments(dishId);
    document.getElementById("success-message").style.display = "block";
  } catch (error) {
    throw new Error(`Error posting comment: ${error.message}`);
  }
};

// Function to delete a comment
const deleteComment = async (id) => {
  try {
    const response = await fetch(`${BACKEND_ROOT_URL}/cmt/delete/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete comment");
    }
  } catch (error) {
    throw new Error(`Error deleting comment: ${error.message}`);
  }
};

// Event listener for submitting the comment form
document
  .getElementById("comment-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const commentContent = formData.get("content");
    const dishId = formData.get("dishId");
    const userId = localStorage.getItem("userId");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    try {
      console.log("Comment Content:", commentContent);
      console.log("Dish ID:", dishId);
      console.log("User ID:", userId);

      if (isLoggedIn === "true") {
        await submitComment(commentContent, dishId, userId);
        event.target.reset();
      } else {
        alert("Please sign in to comment.");
      }
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
