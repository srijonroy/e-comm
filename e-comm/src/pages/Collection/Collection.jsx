import React from "react";
import CollectionItem from "../../component/collection-item/collection-item.component";
import { withCollections } from "../../hoc/withCollections";
import "./Collection.scss";

const Collection = ({ match, collections }) => {
  let collectionChosen = null;

  for (let item in collections) {
    if (collections[item].routeName === match.params.categoryId) {
      collectionChosen = collections[item];
    }
  }

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

export default withCollections(Collection);
