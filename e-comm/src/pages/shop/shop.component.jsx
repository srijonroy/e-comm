import React, { useEffect, useState } from "react";
import CollectionOverview from "../../component/collections-overview/CollectionOverview";
import "./shop.styles.scss";
import { Route } from "react-router-dom";
import Collection from "../Collection/Collection";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { useDispatch } from "react-redux";
import {
  fetchCollectionsStart,
} from "../../redux/shopData/shop.actions";
import WithSpinner from "../../component/withSpinner/withSpinner.component";

const Shop = ({ match }) => {
  const dispatch = useDispatch();
  const [loading, setstate] = useState(true);
  const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
  const CollectionWithSpinner = WithSpinner(Collection);

  useEffect(() => {
    dispatch(fetchCollectionsStart());
    return () => {};
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={!loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={(props) => (
          <CollectionWithSpinner isLoading={!loading} {...props} />
        )}
      />
    </div>
  );
};

export default Shop;
