import React from "react";

interface Props {
  className: string;
  text: string;
}

const Button: React.FC<Props> = (props) => {
  const { className, text } = props;

  return <button className={className}>{text}</button>;
};

export default Button;
