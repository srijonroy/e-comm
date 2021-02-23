import React from "react";
import { useSelector } from "react-redux";
import CollectionItem from "../../component/collection-item/collection-item.component";
import "./Collection.scss";

const Collection = ({ match }) => {
  const { collections } = useSelector((state) => state.shop);
  let collectionChosen = null;

  for (let item in collections) {
    if (collections[item].routeName === match.params.categoryId) {
      collectionChosen = collections[item];
      break;
    }
  }
  console.log(collectionChosen);

  const { title, items } = collectionChosen;

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
