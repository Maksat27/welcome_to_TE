import { useState } from "react";

const MainBlock = ({ mouseEnterCallback, children }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallback?.();
  };

  return (
    <>
      <div
        onMouseEnter={mouseEnterHandler}
        className={isActive ? "active" : ""}
      >
        {children}
      </div>
    </>
  );
};

export const Block1 = ({ mouseEnterCallback, imgSrc, imgAlt }) => {
  return (
    <BaseBlock mouseEnterCallback={mouseEnterCallback}>
      <img src={imgSrc} alt={imgAlt} />
    </BaseBlock>
  );
};

export const Block2 = ({ mouseEnterCallback, content }) => {
  return (
    <BaseBlock mouseEnterCallback={mouseEnterCallback}>
      <p>{content}</p>
    </BaseBlock>
  );
};

export const Block3 = ({ mouseEnterCallback, userData }) => {
  return (
    <BaseBlock mouseEnterCallback={mouseEnterCallback}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </BaseBlock>
  );
};
