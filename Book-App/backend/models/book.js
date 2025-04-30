import mongoose from "mongoose";
const bookschema=new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String},
    date: {type: string},
    image: {type: String},
})
const Book =mongoose.model("MyBook",bookschema)
export default Book;