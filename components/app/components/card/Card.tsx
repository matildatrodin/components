import { FC, ReactNode, useContext } from "react";
import { Card as CardMui } from "@mui/material";
import { Card as CardRadix } from "@radix-ui/themes";
import { Libraries, LibraryContext } from "@/app/context/LibraryProvider";

interface CardProps {
  children: ReactNode;
  outlined?: boolean;
  elevated?: boolean;
  image?: string;
}

const Card: FC<CardProps> = ({ children, outlined, elevated }) => {
  const { library } = useContext(LibraryContext);

  const Switch = () => {
    switch (library) {
      default:
      case Libraries.default:
        return <div className="p-3 rounded shadow">{children}</div>;
      case Libraries.mui:
        return outlined ? (
          <CardMui className="p-3" variant={"outlined"}>
            {children}
          </CardMui>
        ) : (
          <CardMui className="p-3">{children}</CardMui>
        );
      case Libraries.radix:
        return elevated ? (
          <CardRadix variant="classic">{children}</CardRadix>
        ) : (
          <CardRadix>{children}</CardRadix>
        );
    }
  };

  return <>{Switch()}</>;
};

export default Card;
