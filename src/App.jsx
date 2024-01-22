// DO NOT DELETE

import './App.css'; 
// import React, {useState, useEffect} from 'react';
import {Header} from './Header';
import  {Description}  from './Description';
import DogListContainer from './DogListContainer';
import BreedsSelect from './BreedsSelect';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {

//   const [DogUrl,setDogUrl] = useState("")
  
//   const ChangeDog=()=>{
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then((data) => {
//       setDogUrl(data.message); 
//     })
//     .catch(error => {
//     console.error('There was a problem fetching the dog image:', error);
//     });
//    };

//  useEffect(()=>{
//   const fetchDogUrl =()=>{
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then((data) => {
//       // データを処理するコードをここに記述
//       setDogUrl(data.message); 
//     })
//     .catch(error => {
//     console.error('There was a problem fetching the dog image:', error);
//     });
//    };

//    fetchDogUrl();

//   },[]);

  return (
    <>
      <Header />
      <DogListContainer />
      <Description />
      <BreedsSelect/>
    </>
  )
}
