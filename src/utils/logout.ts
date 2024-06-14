export const logout = () => {
  localStorage.removeItem("voip-user-data");
  localStorage.removeItem("voip-user-profile");
  window.location.href = "/";
}