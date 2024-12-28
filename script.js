const myLibrary = []
const table = document.getElementById('bookTable')
//book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
//add book to the array
function AddBookToLibrary(book) {
    myLibrary.push(book)
}
//placeholder for constructing books
// const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 300, true)
// const LotR = new Book("Lord of the Rings", "J.R.R. Tolkien", 500, false)
// AddBookToLibrary(hobbit)
// AddBookToLibrary(LotR)

//function to display books
function DisplayBooks(library) {
    
        //create new row
        const newRow = document.createElement('tr')
        table.appendChild(newRow)
        //create ele td for title
        const title = document.createElement('td')
        title.innerHTML = library[library.length-1].title
        newRow.appendChild(title)
        //create ele td for author
        const author = document.createElement('td')
        author.innerHTML = library[library.length-1].author
        newRow.appendChild(author)
        //create ele td for pages
        const pages = document.createElement('td')
        pages.innerHTML = library[library.length-1].pages
        newRow.appendChild(pages)
        //create ele td for read
        const read = document.createElement('td')
        if (library[library.length-1].read == true) {
            read.innerHTML = "Yes"
        } else {
            read.innerHTML = "No"
        }
        newRow.appendChild(read)
    
}
//a function that takes input from form to add book to array
//work on progress
function addBookBTN(library) {
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').checked
    const newBook = new Book(title, author, pages, read)
    library.push(newBook)
    console.log('123')
}
//when button clicked it adds a book and displays it
let btn = document.getElementById('addBook')
btn.addEventListener("click", () => {
    addBookBTN(myLibrary)
    DisplayBooks(myLibrary)
}
)
