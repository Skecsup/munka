import React, { useState } from "react";
import FormRow from "../components/FormRow";
import { useAppContext } from "../context/appContext";
const Admin = () => {
  const { createProduct } = useAppContext();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const prod = {
      name: name,
      desc: desc,
      image: image,
      price: parseFloat(price),
    };
    createProduct(prod);
  };

  return (
    <div>
      <h1>Admin</h1>

      <form onSubmit={submitHandler}>
        <FormRow
          type="text"
          name="name"
          value={name}
          handleChange={(e) => setName(e.target.value)}
        />
        <FormRow
          type="text"
          name="desc"
          value={desc}
          handleChange={(e) => setDesc(e.target.value)}
        />
        <FormRow
          type="text"
          name="image"
          value={image}
          handleChange={(e) => setImage(e.target.value)}
        />

        <FormRow
          type="text"
          name="price"
          value={price}
          handleChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
