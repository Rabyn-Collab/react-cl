import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Option,
  Select,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { useSelector } from "react-redux";
import { baseUrl } from "../../../constants/api_url";
import { useUpdateProductMutation } from "../../products/productApi";
import { toast } from "react-toastify";

export const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];


export const productSchema = Yup.object({
  title: Yup.string().required(),
  detail: Yup.string().required(),
  price: Yup.number().required(),
  stock: Yup.number().required(),
  brand: Yup.string().required(),
  category: Yup.string().required(),
  image: Yup.mixed().required().test('fileType', 'invalid image', (e) => {
    return validTypes.includes(e.type);
  })
});


const EditForm = ({ product }) => {
  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const { user } = useSelector((state) => state.userSlice);
  const nav = useNavigate();



  const { values, handleChange,
    handleSubmit, errors, setFieldValue, touched } = useFormik({

      initialValues: {
        title: product.title,
        description: product.description,
        price: product.price,
        stock: product.stock,
        brand: product.brand,
        category: product.category,
        image: null,
        imageReview: product.image

      },

      onSubmit: async (val, { resetForm }) => {
        const formData = new FormData();
        formData.append('title', val.title);
        formData.append('description', val.description);
        formData.append('price', Number(val.price));
        formData.append('stock', Number(val.stock));
        formData.append('category', val.category);
        formData.append('brand', val.brand);

        try {


          if (val.image === null) {
            await updateProduct({
              id: product._id,
              body: formData,
              token: user.token
            });

          } else {
            formData.append('image', val.image);
            await updateProduct({
              id: product._id,
              body: formData,
              token: user.token
            });
          }
          toast.success('successfully updated');
          nav(-1);



        } catch (err) {
          toast.error(err.data?.message);
        }



      },
      //  validationSchema: productSchema

    });


  return (
    <Card color="transparent" shadow={false} className="max-w-sm mx-auto  mt-4 mb-4">
      <Typography variant="h4" color="blue-gray">
        Edit Product
      </Typography>

      <form onSubmit={handleSubmit} className="mt-2">
        <div className="mb-1 flex flex-col gap-3 space-y-2">

          <Input
            size="lg"
            label="title"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
          {errors.title && touched.title && <h1 className='text-pink-700'>{errors.title}</h1>}

          <Input
            size="lg"
            label="price"
            name="price"
            type="number"
            value={values.price}
            onChange={handleChange}
          />
          {errors.price && touched.price && <h1 className='text-pink-700'>{errors.price}</h1>}
          <Input
            size="lg"
            label="stock"
            value={values.stock}
            onChange={handleChange}
            name="stock"
            type="number"
          />
          {errors.stock && touched.stock && <h1 className='text-pink-700'>{errors.stock}</h1>}
          <Select value={values.brand} onChange={(e) => setFieldValue('brand', e)} label="Select Brand">
            <Option value="samsung">Samsung</Option>
            <Option value="apple">Apple</Option>
            <Option value="Samsung">Samsung</Option>
            <Option value="dolce">Dolce</Option>
          </Select>
          <Select value={values.category} onChange={(e) => setFieldValue('category', e)} label="Select Category">
            <Option value="clothes">Clothes</Option>
            <Option value="tech">Tech</Option>
          </Select>

          <Textarea
            size="lg"
            label="description"
            name="description"
            value={values.description}
            onChange={handleChange}
          />


          <div className='space-y-2'>
            <h1>Select An Image</h1>

            <Input
              label="Image File"
              onChange={(e) => {
                const file = e.target.files[0];
                setFieldValue('imageReview', URL.createObjectURL(file))
                setFieldValue('image', file);
              }}
              type='file'
              name='image'
              multiple
              accept='image/*'
            />
            {errors.image && touched.image && <h1 className='text-pink-700'>{errors.image}</h1>}

            {values.imageReview && <img src={values.image === null ? `${baseUrl}${values.imageReview}` : values.imageReview} alt="" />}
          </div>


        </div>

        <Button loading={isLoading} type="submit" className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}
export default EditForm