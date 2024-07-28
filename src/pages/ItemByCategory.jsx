import React from 'react'
import { useNavigate, useParams } from 'react-router';
import { useApiHooks } from '../hooks/apiHooks';

const ItemByCategory = () => {
  const nav = useNavigate();
  const { cata } = useParams();

  const [load, data, err] = useApiHooks('https://www.themealdb.com/api/json/v1/1/filter.php', {
    c: cata
  });


  if (load) {
    return <h1>Loading....</h1>
  }

  if (err) {
    return <h1>{err}</h1>
  }


  console.log(data);

  return (
    <div className='p-4 grid grid-cols-3 gap-4'>

      {data && data?.meals?.map((meal) => {
        return <div onClick={() => nav(`/item-detail/${meal.idMeal}`)} key={meal.idMeal} className='shadow-xl'>
          <h1>{meal.strMeal}</h1>
          <img src={meal.strMealThumb} alt="" />

        </div>
      })}




    </div>
  )
}

export default ItemByCategory