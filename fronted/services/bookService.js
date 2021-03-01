class BookService{
    constructor(){
        this.URI = '/api/books';
    }
    async getBooks(){
        const response = await fetch(this.URI);
        const data = await response.json();
        return data;
    }
    async postBooks(book){
        const response = await fetch(this.URI, {
            method: 'POST',
            body: book
        })
        const data = await response.json();
        console.log(data);
    }
    async deleteBooks(bookID){
        const response = await fetch(`${this.URI}/${bookID}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });
        const data = await response.json();  
    }
}

export default BookService;