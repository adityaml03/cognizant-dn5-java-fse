import { books } from "../Data";

function BookDetails() {
  return (
    <>
      <h2>Book Details</h2>

      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.name}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </>
  );
}

export default BookDetails;