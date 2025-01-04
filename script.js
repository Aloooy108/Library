let myLibrary = []
let counter = 0
const table = document.getElementById('bookTable')
//book constructor
function Book(title, author, pages, read, id) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = id

}


//function to display books
function DisplayBooks(library) {
    //create new row
    const newRow = document.createElement('tr')
    //set attribute for deletion
    newRow.setAttribute('data-index-number', `${counter}`)
    table.appendChild(newRow)
    //create ele td for title
    const title = document.createElement('td')
    title.innerHTML = library[library.length - 1].title
    newRow.appendChild(title)
    //create ele td for author
    const author = document.createElement('td')
    author.innerHTML = library[library.length - 1].author
    newRow.appendChild(author)
    //create ele td for pages
    const pages = document.createElement('td')
    pages.innerHTML = library[library.length - 1].pages
    newRow.appendChild(pages)
    //create ele td for read
    const read = document.createElement('td')
    if (library[library.length - 1].read == true) {
        read.innerHTML = "Yes"
    } else {
        library[library.length-1].read=false
        read.innerHTML = "No"
    }
    newRow.appendChild(read)

    //read button
    const readBTN = document.createElement('button')
    readBTN.innerHTML = "Read"
    newRow.appendChild(readBTN)
    readBTN.addEventListener('click', ($read) => {
        if(read.innerHTML)
        read.innerHTML='Yes'
    })

    //delete button
    const dlt = document.createElement('button')
    dlt.innerHTML = 'Delete'
    newRow.appendChild(dlt)
    dlt.addEventListener('click', ($newRow) => {
        //remove from array
        myLibrary = myLibrary.filter(book => book.id != newRow.getAttribute('data-index-number'))
        //remove element
        newRow.remove()
    })

    counter++
}
//a function that takes input from form to add book to array
//work on progress
function addBookBTN(library) {
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').checked
    const newBook = new Book(title, author, pages, read, counter)
    library.push(newBook)

}
//when button clicked it adds a book and displays it
let btn = document.getElementById('addBook')
btn.addEventListener("click", () => {
    addBookBTN(myLibrary)
    DisplayBooks(myLibrary)
}
)

