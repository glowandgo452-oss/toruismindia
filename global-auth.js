import { auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    localStorage.setItem("current_user", JSON.stringify({
      uid: user.uid,
      name: user.displayName || user.email.split('@')[0],
      email: user.email,
      firebase: true
    }));
  } else {
    localStorage.removeItem("current_user");
  }
  // Update nav UI after auth state known
  updateNavUI();
});

function updateNavUI() {
  const user = JSON.parse(localStorage.getItem("current_user") || "null");
  const authLink = document.getElementById("authNavLink");
  const userNavName = document.getElementById("userNavName");
  if (!authLink) return;
  if (user) {
    authLink.href = "#";
    authLink.textContent = "Logout";
    authLink.onclick = (e) => { e.preventDefault(); logoutUser(); };
    if (userNavName) userNavName.textContent = "Hi, " + (user.name || user.email);
  } else {
    authLink.href = "register.html";
    authLink.textContent = "Login / Register";
    authLink.onclick = null;
    if (userNavName) userNavName.textContent = "";
  }
}

window.logoutUser = async function () {
  await signOut(auth);
  localStorage.removeItem("current_user");
  window.location.href = "index.html";
};