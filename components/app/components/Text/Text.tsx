import { FC, ReactNode, useContext } from "react";
import { Typography as TextMui } from "@mui/material";
import { Text as TextRadix } from "@radix-ui/themes";
import { Libraries, LibraryContext } from "@/app/context/LibraryProvider";

interface TextProps {
  children: ReactNode;
  color?: "black" | "white";
  size?: "small" | "medium" | "large";
}

const Text: FC<TextProps> = ({
  children,
  color = "black",
  size = "medium",
}) => {
  const { library } = useContext(LibraryContext);

  const Switch = () => {
    switch (library) {
      default:
      case Libraries.default:
        return (
          <p className={"m-0 " + `text-[color:${color}]`} color={color}>
            {children}
          </p>
        );
      case Libraries.mui:
        return (
          <TextMui variant="body1" color={color}>
            {children}
          </TextMui>
        );
      case Libraries.radix:
        switch (size) {
          case "small":
            return (
              <TextRadix as="p" size="1" className={`text-[color:${color}]`}>
                {children}
              </TextRadix>
            );
          case "medium":
            return (
              <TextRadix as="p" size="3" className={`text-[color:${color}]`}>
                {children}
              </TextRadix>
            );
          case "large":
            return (
              <TextRadix as="p" size="5" className={`text-[color:${color}]`}>
                {children}
              </TextRadix>
            );
        }
    }
  };

  return <>{Switch()}</>;
};

export default Text;
