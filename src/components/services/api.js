const API_BASE_URL = "https://bethel-prayer-house.onrender.com";

// ==================================================
// CREATE PRAYER REQUEST
// Public endpoint
// ==================================================

export async function createPrayerRequest(formData) {
  const response = await fetch(
    `${API_BASE_URL}/api/prayer-requests/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.detail || "Something went wrong"
    );
  }

  return data;
}


// ==================================================
// GET PRAYER REQUESTS
// Authenticated team members
// ==================================================

export async function getPrayerRequests() {
  const token = localStorage.getItem("access_token");

  if (!token) {
    throw new Error("You are not logged in.");
  }

  const response = await fetch(
    `${API_BASE_URL}/api/prayer-requests/`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.detail || "Unable to fetch prayer requests"
    );
  }

  return data;
}