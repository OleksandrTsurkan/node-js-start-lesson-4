const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Oleksandr:08Tt0808@cluster0.d4iwpq4.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
