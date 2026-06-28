const host =
  typeof window !== "undefined" ? window.location.hostname : "localhost";

const API_URL = `http://${host}:3000`;

export async function api(path, options = {}) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erro na comunicação com a API");
  }

  return data;
}