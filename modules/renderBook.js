const renderBooks = (booksList) => {
  const listElm = document.querySelector('.books-list');
  listElm.innerHTML = '';

  booksList.list.forEach((book) => {
    listElm.innerHTML += `
        <li>
          <p>"<span class="title">${book.title}</span>" ${book.author}</p> 
          <button>remove</button>
        </li>
      `;
  });

  const removeBtns = document.querySelectorAll('li button');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const element = btn.parentNode;
      const bookTitle = element.querySelector('.title').textContent;

      booksList.remove(bookTitle);

      element.remove();
    });
  });
};

export default renderBooks;
