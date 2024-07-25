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


  const meal = data?.meals[0];
  const st = 'https://www.youtube.com/watch?v=nMyBC9staMU';

  return (
    <div className='p-4 '>
      {data && <div>
        <div className='h-[300px] w-[300px]'>
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>

      </div>}



    </div>
  )
}


export default ItemDetail