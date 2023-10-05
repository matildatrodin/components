import { FC, ReactNode, useContext } from "react";
import { Typography as TextMui } from "@mui/material";
import { Text as TextRadix } from "@radix-ui/themes";
import { Libraries, LibraryContext } from "@/app/context/LibraryProvider";

interface TextProps {
  children: ReactNode;
}

const Text: FC<TextProps> = ({ children }) => {
  const { library } = useContext(LibraryContext);

  const Switch = () => {
    switch (library) {
      default:
      case Libraries.default:
        return <p className="m-0">{children}</p>;
      case Libraries.mui:
        return <TextMui variant="body1">{children}</TextMui>;
      case Libraries.radix:
        return <TextRadix as="p">{children}</TextRadix>;
    }
  };

  return <>{Switch()}</>;
};

export default Text;
