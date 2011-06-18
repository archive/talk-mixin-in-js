var book = new Book("Andrew Hunt", "The Pragmatic Programmer: From Journeyman to Master");

var json = book.JSONify();
console.log(json); // {auther : "Andrew Hunt", title : "The Pragmatic Programmer: From Journeyman to Master"}
