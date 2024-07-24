import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const ItemDetail = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
        params: {
          i: id
        }
      });


      setData(response.data);

    } catch (err) {
      console.log(err);
      setErr(err?.message);

    } finally {
      setLoad(false);

    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (load) {
    return <h1>Loading....</h1>
  }

  if (err) {
    return <h1>{err}</h1>
  }


  console.log(data);

  return (
    <div className='p-4 grid grid-cols-3 gap-4'>
      {/* 
      {data && data?.meals?.map((meal) => {
        return <div key={meal.idMeal} className='shadow-xl'>
          <h1>{meal.strMeal}</h1>
          <img src={meal.strMealThumb} alt="" />

        </div>
      })} */}




    </div>
  )
}


export default ItemDetail