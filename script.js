document.getElementById('disciplinas').addEventListener('change', function () {
  const pagina = this.value;
  if (pagina) {
    window.location.href = pagina;
  }
});
