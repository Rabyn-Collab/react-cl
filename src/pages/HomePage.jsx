import CategoryCard from '../components/CategoryCard';
import { useApiHooks } from '../hooks/apiHooks';

const HomePage = () => {

  const [load, data, err] = useApiHooks('https://www.themealdb.com/api/json/v1/1/categories.php', {});

  if (load) {
    return <h1>Loading....</h1>
  }

  if (err) {
    return <h1>{err}</h1>
  }



  return (
    <div className='p-4 grid grid-cols-3 gap-4'>


      {data && data?.categories.map((cata) => {
        return <CategoryCard
          cata={cata}
          key={cata.idCategory
          } />;

      })}




    </div>
  )
}

export default HomePage