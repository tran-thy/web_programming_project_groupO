//cozy food
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

// Function to render Vietnamese dish
const renderVietnameseDish = async (id) => {
  try {
    const vietnameseDishData = await fetchData(`Vietnamese_Recipes/${id}`);
    displayDish(vietnameseDishData);
  } catch (error) {
    alert(error.message);
  }
};

// Function to display dish
const displayDish = (dish) => {
  const dishImageElement = document.getElementById("img-vn-cozy");
  dishImageElement.src = dish.dishimage;
};
renderVietnameseDish("VN-0016");

// Call renderVietnameseDish with the desired dish ID
// document.addEventListener("DOMContentLoaded", () => {
//   renderVietnameseDish("VN-0016");
// });
