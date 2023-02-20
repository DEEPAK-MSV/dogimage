import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function DogImage() {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
      fetchDogPicture();
    }, []);
  
    const fetchDogPicture = async () => {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setImageUrl(response.data.message);
    };
  
    const handleButtonClick = () => {
      fetchDogPicture();
    };
  
    return (
      <div className='container'>
        <div className='imagecontainer'>
        <img src={imageUrl} alt="Dog" className='dogimg' />
        </div>
        <br />
        <button onClick={handleButtonClick}>Get another dog picture</button>
      </div>
    );
  };

export default DogImage