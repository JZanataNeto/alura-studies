import React from "react";
import style from "./Botao.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Botao: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={style.botao}>
      {children}
    </button>
  );
};

export default Botao;
