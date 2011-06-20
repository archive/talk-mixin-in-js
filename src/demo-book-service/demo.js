var bookService = new BookService();
mixer.mix(bookService, CacheMixin);

var books;
books = bookService.getByCoverColor("black");

// this call will hit the cache
books = bookService.getByCoverColor("black"); 
