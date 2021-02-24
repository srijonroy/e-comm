import React, { useCallback, useEffect, useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { useSelector } from "react-redux";
import { withCollections } from "../../hoc/withCollections";

const Directory = () => {
  const { sections } = useSelector((state) => state.directory);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

export default withCollections(Directory);
