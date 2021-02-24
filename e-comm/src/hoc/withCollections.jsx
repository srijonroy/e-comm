import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchCollectionsStart } from "../redux/shopData/shop.actions";

export function withCollections(WrappedComponent) {
  const mapStateToProps = (state) => {
    return {
      collections: state.shop.collections,
      isFetching: state.shop.isFetching,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchCollections: () => dispatch(fetchCollectionsStart()),
    };
  };

  class WithCollection extends Component {
    componentDidMount() {
      if (!this.props.isFetching) {
        this.props.fetchCollections();
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // @ts-ignore Getting TS errors, don't know how to fix them. It works though..
  return withRouter(
    connect(mapStateToProps, mapDispatchToProps)(WithCollection)
  );
}
