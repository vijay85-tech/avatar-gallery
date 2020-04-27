import React, { Fragment } from "react";
import AvatarImage from "./AvatarImage";
const AvatarList = (props) => {
  return (
    <Fragment>
      <div className="avt-main ma3 bg-light-purple dib pd10 grow shadow4">
        <AvatarImage imgurl={props.name} />
        <h2 className="tc">{props.name}</h2>
        <p className="tc">{props.work}</p>
      </div>
    </Fragment>
  );
};
export default AvatarList;
