import React, { Fragment } from "react";
import "./Avatar.css";
import "tachyons";
import AvatarList from "./AvatarList";
const Avatar = () => {
  const avatarItems = [
    { id: 1, name: "Bob", work: "Web Developer" },
    { id: 2, name: "Michel", work: "Product Manager" },
    { id: 3, name: "Tom", work: "Customer Support" },
    { id: 4, name: "Vin", work: "Designer" },
    { id: 5, name: "Charles", work: "Server Admin" },
    { id: 6, name: "Padrik", work: "Ops Admin" },
  ];
  const avatarEle = avatarItems.map((avatarDetails, i) => {
    return (
      <AvatarList
        className="mainpage"
        key={avatarItems[i].id}
        id={avatarItems[i].id}
        name={avatarItems[i].name}
        work={avatarItems[i].work}
      />
    );
  });
  return (
    <Fragment>
      <h1 className="tc">Welcome in Avatar World</h1>
      {avatarEle}
    </Fragment>
  );
};
export default Avatar;
