const API_BASE_URL = "http://localhost:5000/api/cart";

export const getCart = async (userId) => {
  const token = localStorage.getItem("auth-token");
  const response = await fetch(API_BASE_URL + "/" + userId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": token || "",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }

  return await response.json();
};

export const saveCart = async (userId, cartItems) => {
  const token = localStorage.getItem("auth-token");
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": token || "",
    },
    body: JSON.stringify({
      userId: userId,
      items: cartItems.map(item => ({
        productId: item._id,
        title: item.title,
        image: item.image,
        price: item.price,
        qty: item.qty,
        stock: item.stock,
      })),
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to save cart");
  }

  return await response.json();
};
