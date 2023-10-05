import { FC, ReactNode, useContext } from "react";
import { Typography as HeadingMui } from "@mui/material";
import { Heading as HeadingRadix } from "@radix-ui/themes";
import { Libraries, LibraryContext } from "@/app/context/LibraryProvider";

interface HeadingProps {
  children: ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: FC<HeadingProps> = ({ children, tag = "h1" }) => {
  const { library } = useContext(LibraryContext);

  const getRadixSize = () => {
    switch (tag) {
      default:
      case "h1":
        return "9";
      case "h2":
        return "8";
      case "h3":
        return "7";
      case "h4":
        return "6";
      case "h5":
        return "5";
      case "h6":
        return "4";
    }
  };

  const Switch = () => {
    switch (library) {
      default:
      case Libraries.default:
        switch (tag) {
          case "h1":
            return <h1 className="m-0">{children}</h1>;
          case "h2":
            return <h2 className="m-0">{children}</h2>;
          case "h3":
            return <h3 className="m-0">{children}</h3>;
          case "h4":
            return <h4 className="m-0">{children}</h4>;
          case "h5":
            return <h5 className="m-0">{children}</h5>;
          case "h6":
            return <h6 className="m-0">{children}</h6>;
        }
      case Libraries.mui:
        return <HeadingMui variant={tag}>{children}</HeadingMui>;
      case Libraries.radix:
        return (
          <HeadingRadix as={tag} size={getRadixSize()}>
            {children}
          </HeadingRadix>
        );
    }
  };

  return <>{Switch()}</>;
};

export default Heading;
