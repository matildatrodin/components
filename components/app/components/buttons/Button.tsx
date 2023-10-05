import { FC, ReactNode, useContext } from "react";
import { Button as ButtonMui } from "@mui/material";
import { Button as ButtonRadix } from "@radix-ui/themes";
import { Libraries, LibraryContext } from "@/app/context/LibraryProvider";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  const { library } = useContext(LibraryContext);

  const Switch = () => {
    switch (library) {
      default:
      case Libraries.default:
        return <button onClick={onClick}>{children}</button>;
      case Libraries.mui:
        return <ButtonMui onClick={onClick}>{children}</ButtonMui>;
      case Libraries.radix:
        return <ButtonRadix onClick={onClick}>{children}</ButtonRadix>;
    }
  };

  return <>{Switch()}</>;
};

export default Button;
