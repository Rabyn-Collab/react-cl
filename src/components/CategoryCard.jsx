import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ cata: { strCategory, strCategoryDescription, strCategoryThumb } }) => {

  const nav = useNavigate();

  // const per = {
  //   ni: {
  //     a: 9
  //   }
  // };

  // const { ni: { a } } = per;
  return (
    <Card className=" overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={strCategoryThumb}
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          {strCategory}
        </Typography>
        <Typography color="gray" className="mt-3 font-normal mb-3">
          {strCategoryDescription.substring(0, 100) + '...'}
        </Typography>
        <Button onClick={() => nav(`/category-item/${strCategory}`)}>View Detail</Button>
      </CardBody>




    </Card>
  )
}

export default CategoryCard