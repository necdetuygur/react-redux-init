import React, { useEffect } from "react";
import { connect } from "react-redux";
import { f1 } from "./actions";

const App = (props: any) => {
  useEffect(() => {
    props.f1();
    // eslint-disable-next-line
  }, []);
  return <div className="container mt-3">Necdet</div>;
};

export default connect(
  (state: {
    /* */
  }) => {
    return {
      /* */
    };
  },
  { f1 }
)(App);
