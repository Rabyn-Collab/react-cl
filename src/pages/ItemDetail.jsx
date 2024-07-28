import { useParams } from 'react-router';
import { useApiHooks } from '../hooks/apiHooks';

const ItemDetail = () => {
  const { id } = useParams();


  const [load, data, err] = useApiHooks('https://www.themealdb.com/api/json/v1/1/lookup.php', {
    i: id
  });



  if (load) {
    return <h1>Loading....</h1>
  }

  if (err) {
    return <h1>{err}</h1>
  }



  const meal = data?.meals[0];


  const st = meal?.strYoutube?.split('=')[1];


  return (
    <div className='p-4 '>
      {data && <div>
        <div>
          <iframe
            className='aspect-auto h-[300px] w-[400px]'
            src={`https://www.youtube.com/embed/${st}`}>
          </iframe>
        </div>
        <p>{meal.strInstructions}</p>

      </div>}



    </div>
  )
}


export default ItemDetail