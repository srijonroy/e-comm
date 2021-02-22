import React from "react";
import { useSelector } from "react-redux";
import CollectionItem from "../../component/collection-item/collection-item.component";
import "./Collection.scss";

const Collection = ({ match }) => {
  const { SHOP_DATA } = useSelector((state) => state.shop);

  const { title, items } = SHOP_DATA.find(
    (item) => item.routeName === match.params.categoryId
  );

  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Collection;
