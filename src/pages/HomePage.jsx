import axios from 'axios';
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setData(response.data);
    } catch (err) {

    }
  }

  useEffect(() => {
    getData();
  }, []);



  return (
    <div className='p-4 grid grid-cols-3'>


      {data && data?.categories.map((cata) => {
        return <div key={cata.idCategory}>
          <h1>{cata.strCategory}</h1>
          <img src={cata.strCategoryThumb} alt="" />

        </div>
      })}




    </div>
  )
}

export default HomePage