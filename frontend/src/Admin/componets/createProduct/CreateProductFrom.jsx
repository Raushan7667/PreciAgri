import { useState } from "react";
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { Fragment } from "react";
import "./CreateProductForm.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../Redux/Customers/Product/Action";
import { data } from "./Secondleveldata";


const initialSizes = [
  { name: "1Kg", quantity: 0 ,price: 0,discountedPrice:0,discountPersent:0},
  { name: "5Kg", quantity: 0,price: 0 ,discountedPrice:0,discountPersent:0},
  { name: "10Kg", quantity: 0 ,price: 0,discountedPrice:0,discountPersent:0},
];

const CreateProductForm = () => {
  // const subCategories=[["Top","Jeans"],["Watch","Mobile"]];
  const [subCategory, setSubCategory] = useState(0);

  const [subCategories, setSubCategories] = useState([]);
  const [thirdLevelOptions, setThirdLevelOptions] = useState([]);

  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: initialSizes,
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    description: "",
  });
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  
  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value
    }));

    // When top level category changes, update second level options
    if (name === "topLavelCategory") {
      const secondLevelOptions = data.categories[value]?.secondDropdown || [];
      setSubCategories(secondLevelOptions);
      setProductData((prevState) => ({
        ...prevState,
        secondLavelCategory: "", // Reset second level category
        thirdLavelCategory: "" // Reset third level category
      }));
      setThirdLevelOptions([]); // Reset third level options
    }

    // When second level category changes, update third level options
    if (name === "secondLavelCategory") {
      const thirdLevel = data.categories[productData.topLavelCategory]?.thirdDropdown[value] || [];
      setThirdLevelOptions(thirdLevel);
      setProductData((prevState) => ({
        ...prevState,
        thirdLavelCategory: "" // Reset third level category
      }));
    }
  };

  const handleSizeChange = (e, index) => {
    let { name, value, } = e.target;
    name === "size_quantity" ? name = "quantity" : name = e.target.name;

    const sizes = [...productData.size];
    const price=[...productData.price];
    const discountedPrice=[...productData.discountedPrice]
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
      
     
    }));
  };

  const handleAddSize = () => {
    const sizes = [...productData.size];
    sizes.push({ name: "", quantity: "" });
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  // const handleRemoveSize = (index) => {
  //   const sizes = [...productData.size];
  //   sizes.splice(index, 1);
  //   setProductData((prevState) => ({
  //     ...prevState,
  //     size: sizes,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct({ data: productData, jwt }))
    console.log(productData);
  };

  // const handleAddProducts=(data)=>{
  //   for(let item of data){
  //     const productsData={
  //       data:item,
  //       jwt,
  //     }
  //     dispatch(createProduct(productsData))
  //   }
  // }

  return (
    <Fragment className="createProductContainer ">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid> */}
          <Grid item xs={12} >
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          {/* <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
              type="number"
            />
          </Grid> */}
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLavelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="seed">Seed</MenuItem>
                <MenuItem value="pesticides">Pesticides</MenuItem>
                <MenuItem value="crops">Crops</MenuItem>

              </Select>
            </FormControl>
          </Grid>

          {/* Second Level Category */}
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLavelCategory"
                value={productData.secondLavelCategory}
                onChange={handleChange}
                label="Second Level Category"
                disabled={!productData.topLavelCategory} // Disable if no top level selected
              >
                {subCategories.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Third Level Category */}
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLavelCategory"
                value={productData.thirdLavelCategory}
                onChange={handleChange}
                label="Third Level Category"
                disabled={!productData.secondLavelCategory} // Disable if no second level selected
              >
                {thirdLevelOptions.map((item, index) => (
                  <MenuItem key={index} value={item.toLowerCase()}>
                    {item.toLowerCase()}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>
          {productData.size.map((size, index) => (
            <Grid container item spacing={3} >
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Size Name"
                  name="name"
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                />
              </Grid> 
              <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={size.price}
              onChange={(event) => handleSizeChange(event, index)}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="DiscountedPrice"
              name="discountedPrice"
              value={size.discountedPrice}
              onChange={(event) => handleSizeChange(event, index)}
              type="number"
            />
          </Grid>
              </Grid>

          ))}
          <Grid item xs={12} >
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Add New Product
            </Button>
            {/* <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20 ml-10"
              size="large"
              onClick={()=>handleAddProducts(dressPage1)}
            >
              Add Products By Loop
            </Button> */}
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default CreateProductForm;
