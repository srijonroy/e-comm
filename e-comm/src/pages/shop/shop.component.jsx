import React, { useState } from "react";
import PreviewCollection from "../../component/preview-collection/preview-collection.component";
import { SHOP_DATA } from "../../data";
import './shop.styles.scss';

const Shop = () => {
  const [data] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {data
        .map(({ id, ...otherCollectionProps }) => {
          return <PreviewCollection key={id} {...otherCollectionProps} />;
        })}
    </div>
  );
};

export default Shop;
