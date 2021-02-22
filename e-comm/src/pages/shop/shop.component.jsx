import React, { useState } from "react";
import CollectionOverview from "../../component/collections-overview/CollectionOverview";
import "./shop.styles.scss";
import { Route } from "react-router-dom";
import Category from "../category/Category";

const Shop = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={Category} />
    </div>
  );
};

export default Shop;
