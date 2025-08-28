import React from "react";
import style from "./Botao.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

export default function Botao({
  children,
  className,
  ...rest
}: Props): React.JSX.Element {
  return (
    <button
      {...rest}
      className={[style.botao, className].filter(Boolean).join(" ")}
    >
      {children}
    </button>
  );
}
