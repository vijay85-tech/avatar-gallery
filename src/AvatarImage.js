import React from "react";
const AvatarImage = (props) => {
  return (
    <img
      src={`https://joeschmoe.io/api/v1/${props.imgurl}`}
      alt={props.imgurl}
    />
  );
};
export default AvatarImage;
