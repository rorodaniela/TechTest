import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../../components";
import {
  CategoryPage, ProductDetail, Products,
} from "../../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path={`/`} element={<Layout><CategoryPage/></Layout>}/>
      <Route exact path={`/products/:id`} element={<Layout><Products/></Layout>}/>
      <Route exact path={`/product/:id`} element={<Layout><ProductDetail/></Layout>}/>
    </Routes>
  );
};

export default AppRoutes;
