import React, { MouseEvent } from "react";

interface Props {
  className: string;
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = (props) => {
  const { className, text, onClick } = props;

  return (
    <button
      className={className}
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
          onClick(event);
        }
      }}
    >
      {text}
    </button>
  );
};

export default Button;
