// @ts-check

export const DogImage = (props)=>{
  console.log(props.imageUrl);
  return(
    <div>
     <img src={props.imageUrl} />
    </div>
  );
};

// export default DogImage