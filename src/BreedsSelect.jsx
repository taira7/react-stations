// @ts-check
import { useEffect, useState } from "react";

export const BreedsSelect = () => {
  const [breeds,setBreeds] = useState();

  useEffect( ()=>{
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res)=>res.json())
    .then((data)=>{
      const dogList = Object.keys(data.message);
      setBreeds(dogList)
    })
},[])   

  console.log("breeds確認",breeds)



  // function ChangeDogList(e) {
  //   console.log(e.target.value);

  // };

  // function DogListChange() {

  // };




  return (
    <>
      <label>
        犬種選択
        <select>
      
        </select>
      </label>
    </>
  )
}

export default BreedsSelect
