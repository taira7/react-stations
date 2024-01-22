// @ts-check
import React,{useState,useEffect} from "react"
import BreedsSelect from "./BreedsSelect";


export const DogListContainer = () => {
  const [selectedBreeds,setselectedBreeds] =('')


//   useEffect(()=>{
//     fetch('https://dog.ceo/api/breeds/list/all')
//     .then((res)=>res.json())
//     .then((data)=>{
//       const dogList = Object.keys(data.message);
//       setBreeds(dogList)
//     })
// },[])           


  return (
  <>
  <BreedsSelect/>
  </>
  )
}

export default DogListContainer
