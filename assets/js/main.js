function toggleCard(button) {
  const details = button.nextElementSibling;

  details.classList.toggle("show");
  button.textContent = details.classList.contains("show")
    ? "Ver menos"
    : "Ver mais";
}
