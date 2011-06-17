var Book = function(author, title){
    this.author = author;
    this.title = title;
};

mixer.mix(Book, JSONifyMixin);