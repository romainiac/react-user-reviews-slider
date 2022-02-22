import data from './data';
import { useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
const App = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, key) => {
          const { id, image, name, title, quote } = person;
          let position = 'nextSlide';
          if (key === index) position = 'activeSlide';
          if (key === index - 1 || (key === 0 && key === people.length - 1))
            position = 'lastSlide';
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev">
          <FiChevronLeft />
        </button>
        <button className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default App;
