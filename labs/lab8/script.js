function toggleTheme() {
  document.body.classList.toggle("dark-mode")
}

buttonVariable = document.getElementById('toggleButton');
buttonVariable.onclick = toggleTheme;
