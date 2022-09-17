import { useEffect, useState } from "react";

const getDogPic = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const dog = await response.json();
    return dog.message;
}

export default function DogPics () {

   //let API = 'https://dog.ceo/api/breeds/image/random';
   const [url, seturl] = useState('https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg')

   /* const getDogPic = () => {
    fetch(API)
        .then ((response) => response.json())
        .then ((data) => seturl(data.message))
        .catch((error) => console.log(error));
   }; */
   useEffect(() => {
        getDogPic().then(pic => seturl(pic))
   }, [])

    return (
      <div className='dog-pics'>
        <img src={url} />
        <button onClick={async e => seturl(await getDogPic())}>🐶</button>
      </div>
    )
  }