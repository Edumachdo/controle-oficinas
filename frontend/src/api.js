const host =
  typeof window !== "undefined" ? window.location.hostname : "localhost";
const API_URL = `http://${host}:3001/api`;
export async function api(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  if (!response.ok) throw new Error("Erro na comunicação com a API");
  return response.json();
}
