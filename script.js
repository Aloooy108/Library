const myLibrary = []
const table = document.getElementById('bookTable')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function AddBookToLibrary(book) {
    myLibrary.push(book)
}
const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 300, true)
const LotR = new Book("Lord of the Rings","J.R.R. Tolkien",500,false)
    AddBookToLibrary(hobbit)
    AddBookToLibrary(LotR)
function DisplayBooks(library) {
    for (let i = 0; i < library.length; i++) {
        const newRow = document.createElement('tr')
        table.appendChild(newRow)
        const title = document.createElement('td')
        title.innerHTML = library[i].title
        newRow.appendChild(title)
        const author = document.createElement('td')
        author.innerHTML = library[i].author
        newRow.appendChild(author)
        const pages = document.createElement('td')
        pages.innerHTML = library[i].pages
        newRow.appendChild(pages)
        const read = document.createElement('td')
        if(library[i].read==true){
            read.innerHTML="Yes"
        } else{
            read.innerHTML="No"
        }
        newRow.appendChild(read)
    }
}

DisplayBooks(myLibrary)