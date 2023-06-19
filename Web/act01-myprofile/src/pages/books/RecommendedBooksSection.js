/*
const RecommendedBooksSection = ({ onAddRecommendedBook, recommendedBooks }) => {
  const [newRecommendedBook, setNewRecommendedBook] = useState('');
  
  const handleAddRecommendedBook = () => {
    if (newRecommendedBook.trim() !== '') {
      onAddRecommendedBook(newRecommendedBook);
      setNewRecommendedBook('');
    }
  };
  
  return (
    <div className="container">
      <h2>Recomendaciones de libros</h2>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Añade un libro recomendado" value={newRecommendedBook} onChange={(e) => setNewRecommendedBook(e.target.value)} />
        <button className="btn btn-outline-secondary" type="button" onClick={handleAddRecommendedBook}>Añade</button>
      </div>
      {recommendedBooks.length > 0 ? (
        <ul className="list-group">
          {recommendedBooks.map((book, index) => (
            <li className="list-group-item" key={index}>{book}</li>
          ))}
        </ul>
      ) : (
        <p>No hay libros recomendados aún</p>
      )}
    </div>
  );
};

export default RecommendedBooksSection;

*/

import { useState } from 'react';
import React from 'react'

function RecommendedBooksSection() {
  const [newRecommendedBook, setNewRecommendedBook] = useState({ bookName: '', authorName: '', recommendation: '' });
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  const handleAddRecommendedBook = () => {
    if (newRecommendedBook.bookName && newRecommendedBook.authorName && newRecommendedBook.recommendation) {
      setRecommendedBooks(prevBooks => [...prevBooks, newRecommendedBook]);
      setNewRecommendedBook({ bookName: '', authorName: '', recommendation: '' });
    } else {
      // Show error message
      alert('Completa todas las secciones antes de publicar');
    }
  };

  return (
    <div className="mb-3">
      <h2>Libros Recomendados</h2>
      <div className="mb-3">
        <label htmlFor="book-name" className="form-label">Nombre del libro</label>
        <input type="text" className="form-control" id="book-name" value={newRecommendedBook.bookName} onChange={(e) => setNewRecommendedBook({...newRecommendedBook, bookName: e.target.value})} />
      </div>
      <div className="mb-3">
        <label htmlFor="author-name" className="form-label">Nombre de la autora o autor</label>
        <input type="text" className="form-control" id="author-name" value={newRecommendedBook.authorName} onChange={(e) => setNewRecommendedBook({...newRecommendedBook, authorName: e.target.value})} />
      </div>
      <div className="mb-3">
        <label htmlFor="book-recommendation" className="form-label">¿Por qué me lo recomiendas?</label>
        <textarea className="form-control" id="book-recommendation" rows="3" value={newRecommendedBook.recommendation} onChange={(e) => setNewRecommendedBook({...newRecommendedBook, recommendation: e.target.value})}></textarea>
      </div>
      <button className="btn btn-outline-secondary" type="button" onClick={handleAddRecommendedBook}>Publicar</button>
      {recommendedBooks.length > 0 ? (
        <ul className="list-group mt-3">
          {recommendedBooks.map((book, index) => (
            <li className="list-group-item" key={index}>
              <h4>{book.bookName} escrito por {book.authorName}</h4>
              <p>{book.recommendation}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No se han hecho recomendaciones de libros todavía.</p>
      )}
    </div>
  );
}


export default RecommendedBooksSection;
