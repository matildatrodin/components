import { FC, ReactNode, useContext } from "react";
import { Button as ButtonMui } from "@mui/material";
import { Button as ButtonRadix } from "@radix-ui/themes";
import { Libraries, LibraryContext } from "@/app/context/LibraryProvider";

interface ButtonProps {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, size = "medium", onClick }) => {
  const { library } = useContext(LibraryContext);

  const getRadixSize = () => {
    switch (size) {
      case "small":
        return "1";
      default:
      case "medium":
        return "2";
      case "large":
        return "3";
    }
  };

  const Switch = () => {
    switch (library) {
      default:
      case Libraries.default:
        return <button onClick={onClick}>{children}</button>;
      case Libraries.mui:
        return (
          <ButtonMui
            variant="contained"
            disableElevation
            onClick={onClick}
            size={size}
          >
            {children}
          </ButtonMui>
        );
      case Libraries.radix:
        return (
          <ButtonRadix onClick={onClick} size={getRadixSize()}>
            {children}
          </ButtonRadix>
        );
    }
  };

  return <>{Switch()}</>;
};

export default Button;
