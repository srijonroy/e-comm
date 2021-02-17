import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import { sectionsToShow } from "./sections";
import "./directory.styles.scss";

const Directory = () => {
  const [sections] = useState(sectionsToShow);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

export default Directory;
