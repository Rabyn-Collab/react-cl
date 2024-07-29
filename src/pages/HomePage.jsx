
import React, { useMemo, useState } from 'react'

const HomePage = () => {
  const [incre, setIncre] = useState(0);
  const [decre, setDecre] = useState(100);

  const dependIncre = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {

    }
    console.log('function run');
    return 2 * incre;
  }, [incre]);

  // console.log(dependIncre);



  return (
    <div>

      <h1>{dependIncre}</h1>
      <button onClick={() => setIncre((prev) => prev + 1)}>Increment Garne</button>

      <p>--------------------------------------------</p>

      <h1>Decrement ko part {decre}</h1>
      <h1>{decre}</h1>

      <button onClick={() => setDecre((prev) => prev - 1)}>Decrement Garne</button>




    </div>
  )
}

export default HomePage














// import CategoryCard from '../components/CategoryCard';
// import { useApiHooks } from '../hooks/apiHooks';

// const HomePage = () => {

//   const [load, data, err] = useApiHooks('https://www.themealdb.com/api/json/v1/1/categories.php', {});

//   if (load) {
//     return <h1>Loading....</h1>
//   }

//   if (err) {
//     return <h1>{err}</h1>
//   }



//   return (
//     <div className='p-4 grid grid-cols-3 gap-4'>


//       {data && data?.categories.map((cata) => {
//         return <CategoryCard
//           cata={cata}
//           key={cata.idCategory
//           } />;

//       })}




//     </div>
//   )
// }

// export default HomePage