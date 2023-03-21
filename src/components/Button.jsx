import React from "react";
import {Link} from "react-router-dom";

export function Button({to}) {
  return (
    <button style={{marginTop: "1rem"}}>
      <Link to={to}>Nästa</Link>
    </button>
  );
}
