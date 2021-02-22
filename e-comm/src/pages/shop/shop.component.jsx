import React from "react";
import CollectionOverview from "../../component/collections-overview/CollectionOverview";
import "./shop.styles.scss";
import { Route } from "react-router-dom";
import Collection from "../Collection/Collection";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={Collection} />
    </div>
  );
};

export default Shop;
