import mongoose from "mongoose";

let databaseConnection = (dbName) => {
    mongoose.connect(`mongodb+srv://ahmed:ahmed@cluster0.avy1rjl.mongodb.net/${dbName}?retryWrites=true&w=majority`)
}

export default databaseConnection;