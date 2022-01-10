export default class Books {
  constructor() {
    this.list = localStorage.getItem('booksList')
      ? JSON.parse(localStorage.getItem('booksList'))
      : [];
  }

  add(book) {
    this.list.push(book);

    localStorage.setItem('booksList', JSON.stringify(this.list));
  }

  remove(title) {
    this.list = this.list.filter((book) => book.title !== title);

    localStorage.setItem('booksList', JSON.stringify(this.list));
  }
}
