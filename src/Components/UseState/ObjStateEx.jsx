import React, { useState } from 'react';
function ObjStateEx() {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red',
    image:
      'https://images-stag.jazelc.com/uploads/garycrossleyford-m2en/Screen-Shot-2023-08-10-at-7.57.48-AM-1024x590.png',
  });

  const updateColor = () => {
    // setCar({
    //   color: 'blue',
    //   image: 'https://i.ytimg.com/vi/hwhVza9y0QU/maxresdefault.jpg',
    // }); // wrong way -> never update state directly! Might work on some situations, but it's not recommended. (We will lose all other data)

    // // the right way (solution)

    setCar(prevState => ({
      ...prevState,
      color: 'blue',
      image: 'https://i.ytimg.com/vi/hwhVza9y0QU/maxresdefault.jpg',
    })); // right way
  };

  console.log(car);

  return (
    <div className='car-container'>
      <h1 className='title'>State Update with Callback Example</h1>
      <p className='subtitle'>Understanding safe updates in React useState</p>
      <div className='car-details'>
        <h2 className='car-brand'>My {car.brand}</h2>
        <h3 className='car-description'>
          It is a <span className={`car-color ${car.color}`}>{car.color}</span>
          {car.model} from {car.year}.
        </h3>
        <div className='car-image-wrapper'>
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className='car-image'
          />
        </div>
        <button className='btn-change-color' onClick={updateColor}>
          Change Color To Blue
        </button>
      </div>
    </div>
  );
}

export default ObjStateEx;
