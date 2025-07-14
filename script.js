
document.querySelectorAll('li[data-id]').forEach((item) => {
  const id = item.getAttribute('data-id');
  const saved = localStorage.getItem(id);
  if (saved === 'done') {
    item.classList.add('completed');
    item.textContent = '✅ ' + item.textContent.slice(2);
  }

  item.addEventListener('click', () => {
    if (item.classList.contains('completed')) {
      item.classList.remove('completed');
      item.textContent = '🔒 ' + item.textContent.slice(2);
      localStorage.removeItem(id);
    } else {
      item.classList.add('completed');
      item.textContent = '✅ ' + item.textContent.slice(2);
      localStorage.setItem(id, 'done');
    }
  });
});
