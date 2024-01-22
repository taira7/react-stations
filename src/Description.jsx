// @ts-check
import React,{useState,useEffect} from 'react'
import  {DogImage}  from './DogImage.jsx';

export const Description=()=>{
  const [dogUrl,setDogUrl] = useState('')

  const fetchDogUrl =()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then((data) => {
      // データを処理するコードをここに記述
      setDogUrl(data.message); 
    })
    .catch(error => {
    console.error('There was a problem fetching the dog image:', error);
    });
   };

 useEffect(()=>{
  fetchDogUrl();
 },[])
 
  const ChangeDog=()=>{
    fetchDogUrl();
   };


return(
  <>
   <button className='renewal-button' onClick={ChangeDog}>更新する</button>
   <p>犬の画像を表示するサイトです</p>
   <DogImage imageUrl={dogUrl} />
   
  </>
 )
};