import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { Borrower } from "./entity/borrowerModel";
import { Book } from "./entity/bookModel";
import booksList from "../books.json";

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    const borrower = new Borrower();
    borrower.firstName = "Timber";
    borrower.lastName = "Saw";
    borrower.email = "timbersaw@gmail.com";
    borrower.phoneNumber = "437 950 4812";
    await AppDataSource.manager.save(borrower);
    console.log("Saved a new borrower with id: " + borrower.id);

    console.log("Loading borrowers from the database...");
    const borrowers = await AppDataSource.manager.find(Borrower);
    console.log("Loaded borrowers: ", borrowers);
    await importBooks(booksList.results);
    const books = await AppDataSource.manager.find(Book);
    console.log("Loaded books: ", books);

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
  })
  .catch((error) => console.log(error));

async function importBooks(books: any[]) {
  for (const bookData of books) {
    const book = new Book();
    book.id = bookData.id;
    book.title = bookData.title;
    book.author = bookData.authors[0].name;
    book.isAvailable = true;
    await AppDataSource.manager.save(book);
  }
}
