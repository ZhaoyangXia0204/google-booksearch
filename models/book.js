const mongoose = require('mongoose');
const { Schema } = mongoose;

const BooksSchema = new Schema({
    bookId: {
        type: String
    },
    title: {
        type: String,
    },
    authors: {
        type: Array,
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    },

});
// a unique googleId must be indexed for each saved book
// else, throw error, do not store in database
 
const Book = mongoose.model("Book", BookSchema);

module.exports = Book;