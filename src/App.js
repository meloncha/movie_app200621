import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: '김치',
    image: 'https://woochonfood.com/wp-content/uploads/2019/05/%EB%B0%B0%EC%B6%94%EA%B9%80%EC%B9%98-Napa-Cabbage-Kimchi.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: '삼겹살',
    image: 'https://lh3.googleusercontent.com/proxy/lKMG7lAokrNXvkud-jBMNo_t-4V5pV-huDFuJ613ujDswBXTNXRH8h0HtEYvhO6jraNQhk5RUmrZJYZZe337llbUCkIbuWXh9cXmvCEhN63CV_dUzgjDAjNFExfC8X8QnQPLPaWSrQ',
    rating: 4,
  },
  {
    id: 3,
    name: '비빔밥',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/03/355b5cd5c3beb1a775c82ee425dcd1931.jpg',
    rating: 2,
  },
  {
    id: 4,
    name: '돈까스',
    image: 'https://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg',
    rating: 3,
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>    
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {foodILike.map((dish) => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image}
          rating={dish.rating}  
        />
      ))}
    </div>
  );
}

export default App;
