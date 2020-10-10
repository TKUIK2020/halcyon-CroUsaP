function viewBlock() {
  const modal = document.getElementById('modal');
  modal.removeAttribute('hidden');
}

function hideBlock() {
  const modal = document.getElementById('modal');
  modal.setAttribute('hidden', '');
}
