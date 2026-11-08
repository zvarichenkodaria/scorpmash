// search.js
document.addEventListener('DOMContentLoaded', () => {
  // Ждем, пока страница и таблицы загрузятся (JSON-скрипты сработают чуть позже)
  setTimeout(() => {
    // Ищем на странице поле поиска по ID
    const searchInput = document.getElementById('catalog-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();

      // Находим все таблицы на странице
      const tables = document.querySelectorAll('.table-block');

      tables.forEach(tableBlock => {
        const rows = tableBlock.querySelectorAll('tbody tr');
        let visibleCount = 0;

        rows.forEach(row => {
          // Берем весь текст из строки (артикул, название, параметры)
          const text = row.textContent.toLowerCase();
          
          if (text.includes(query)) {
            row.style.display = '';
            visibleCount++;
          } else {
            row.style.display = 'none';
          }
        });

        // Если в таблице нет подходящих строк — прячем весь блок с заголовком
        if (visibleCount === 0) {
          tableBlock.style.display = 'none';
        } else {
          tableBlock.style.display = '';
        }
      });
    });
  }, 500); // Задержка в полсекунды, чтобы данные из JSON успели подгрузиться
});
