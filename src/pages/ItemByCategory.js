import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const ItemByCategory = () => {
  const d = useParams();
  console.log(d);
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
          c: 'slkdjsdalkjsad'
        }
      });


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
    <div>



    </div>
  )
}

export default ItemByCategory