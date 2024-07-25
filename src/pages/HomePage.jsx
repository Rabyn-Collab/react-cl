import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import CategoryCard from '../components/CategoryCard';

const HomePage = () => {
  const nav = useNavigate();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');


      setData(response.data);

    } catch (err) {
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



  return (
    <div className='p-4 grid grid-cols-3 gap-4'>


      {data && data?.categories.map((cata) => {
        return <CategoryCard onClick={() => nav(`/category-item/${cata.strCategory}`)} key={cata.idCategory} />;

      })}




    </div>
  )
}

export default HomePage