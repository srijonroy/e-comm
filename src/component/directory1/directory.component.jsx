import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import { sectionsToShow } from "./sections";
import "./directory.styles.scss";

const Directory = () => {
  const [sections] = useState(sectionsToShow);

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => {
        return (
          <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size} />
        );
      })}
    </div>
  );
};

export default Directory;
