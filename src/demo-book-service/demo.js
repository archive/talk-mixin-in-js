var bookService = new BookService();
mixer.mix(bookService, CacheMixin);

bookService.initCache();

var books;
books = bookService.getByCoverColor("black");

// this call will hit the cache
books = bookService.getByCoverColor("black"); 
