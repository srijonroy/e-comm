import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./preview-collection.styles.scss";
import { useHistory } from "react-router";

const PreviewCollection = ({ title, items }) => {
  const history = useHistory();
  return (
    <div className="collection-preview">
      <h1
        style={{ cursor: "pointer" }}
        onClick={() =>
          history.push(`${history.location.pathname}/${title.toLowerCase()}`)
        }
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} {...item}></CollectionItem>;
          })}
      </div>
    </div>
  );
};

export default PreviewCollection;
