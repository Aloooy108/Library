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
const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 300, true)
const LotR = new Book("Lord of the Rings","J.R.R. Tolkien",500,false)
AddBookToLibrary(hobbit)
AddBookToLibrary(LotR)

//function to display books
function DisplayBooks(library) {
    for (let i = 0; i < library.length; i++) {
        //create new row
        const newRow = document.createElement('tr')
        table.appendChild(newRow)
        //create ele td for title
        const title = document.createElement('td')
        title.innerHTML = library[i].title
        newRow.appendChild(title)
        //create ele td for author
        const author = document.createElement('td')
        author.innerHTML = library[i].author
        newRow.appendChild(author)
        //create ele td for pages
        const pages = document.createElement('td')
        pages.innerHTML = library[i].pages
        newRow.appendChild(pages)
        //create ele td for read
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