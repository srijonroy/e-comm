import React, { useState } from "react";
import { useSelector } from "react-redux";
import PreviewCollection from "../preview-collection/preview-collection.component";
import "./CollectionOverview.scss";

const CollectionOverview = () => {
  const { SHOP_DATA } = useSelector((state) => state.shop);
  return (
    <div className="collections-overview">
      {SHOP_DATA.map(({ id, ...otherCollectionProps }) => {
        return <PreviewCollection key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

export default CollectionOverview;
