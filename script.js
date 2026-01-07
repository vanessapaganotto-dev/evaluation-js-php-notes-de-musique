document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("note-select");
  const form = document.getElementById("note-form");
  const result = document.getElementById("resultat");

  select.addEventListener("change", () => {
    const note = select.value;
    const url = form.action;

    fetch(url + "?note=" + encodeURIComponent(note))
      .then(response => response.text())
      .then(message => {
        result.textContent = message;
      })
      .catch(error => {
        result.textContent = "Erreur lors de la requête";
        console.error(error);
      });
  });
});