import React, { useState } from 'react';
import RecommendedBooksSection from './RecommendedBooksSection.js';
import './FavBooks.css';


const FavBooks = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  
  const addFavoriteBook = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
  };
  
  const addRecommendedBook = (book) => {
    setRecommendedBooks([...recommendedBooks, book]);
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron">
            <h1 className="display-1">Mis libros favoritos</h1>
            <h2 className="lead">A continuación, comparto algunos de mis libros favoritos</h2>



            <h3>1. Crimen y castigo</h3>
	          <p>Autor: Fiódor Dostoyevski</p>
	          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_855950-MLM44948532511_022021-F.jpg&f=1&nofb=1&ipt=4e12d18a2cbb6a5164110acc51d0463fd1b756f0f3c74d83f523a7ca8b57e87c&ipo=images" alt="El nombre del viento"></img>
            <p></p>
            <p class="stars">&#9733; &#9733; &#9733; &#9733; &#9734;</p>
	          <p class="review">"La novela fue publicada por primera vez en 1866 y es considerada una de las obras más importantes de la literatura rusa y mundial. Dostoyevski también es conocido por otras obras influyentes como "Los hermanos Karamázov", "El idiota" y "Memorias del subsuelo"."</p>

	          <h3>2. To Kill a Mockingbird</h3>
	          <p>Autora: Harper Lee</p>
	          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.penguin.com.au%2Fcovers%2Foriginal%2F9781785150357.jpg&f=1&nofb=1&ipt=3ea6bbc172d8d82274dd95d6df657b2ba3402774c0f815394e5050676f497d20&ipo=images" alt="El nombre del viento"></img>
            <p></p>
            <p class="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
	          <p class="review">"Publicado en 1960, es una poderosa novela que aborda temas como la justicia, la raza y la infancia. Ambientada en la década de 1930 en un pequeño pueblo de Alabama, sigue la historia de Scout Finch, una niña que aprende importantes lecciones sobre el mundo que la rodea a través de los ojos de su padre, un abogado que defiende a un hombre negro acusado de un crimen que no cometió."</p>

            <h3>3. 1984</h3>
	          <p>Autor: George Orwell</p>
	          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flitstack.com%2Fwp-content%2Fuploads%2F2013%2F06%2F1984_poster.jpg&f=1&nofb=1&ipt=d859791232d0f6dda047a021392fdd245422d2cc30b9118587d73d8713dbb727&ipo=images" alt="El nombre del viento"></img>
            <p></p>
            <p class="stars">&#9733; &#9733; &#9733; &#9733; &#9734;</p>
	          <p class="review">"Este libro es una obra maestra de la literatura distópica. Orwell crea un mundo aterradoramente realista y te hace pensar sobre el poder del gobierno y la libertad personal."</p>



            <ul className="list-group">
              {favoriteBooks.map((book, index) => (
                <li className="list-group-item" key={index}>{book}</li>
              ))}
            </ul>
            <h3>¿Tienes alguna recomendación para mí? Comentalá abajo.</h3>
            <RecommendedBooksSection onAddRecommendedBook={addRecommendedBook} recommendedBooks={recommendedBooks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavBooks;
