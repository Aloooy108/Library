const myLibrary=[]

function Book(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
}

function addBookToLibrary(book){
    myLibrary.push(book)
}
const hobbit=new Book("The Hobbit","J.R.R. Tolkien",300,true)
addBookToLibrary(hobbit)