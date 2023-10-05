import { FC, ReactNode, useContext } from "react";
import {
  FormControlLabel,
  RadioGroup as RadioGroupMui,
  Radio as RadioMui,
} from "@mui/material";
import {
  RadioGroup as RadioGroupRadix,
  Text as TextRadix,
} from "@radix-ui/themes";
import { Libraries, LibraryContext } from "@/app/context/LibraryProvider";

interface RadioType {
  label?: string;
  value: string;
  onClick?: () => void;
}

interface RadiosProps {
  radios: RadioType[];
}

const Radios: FC<RadiosProps> = ({ radios }) => {
  const { library } = useContext(LibraryContext);

  const Switch = () => {
    switch (library) {
      default:
      case Libraries.default:
        return (
          <div className="flex flex-row">
            {radios.map((radio) => (
              <div className="flex flex-row gap-1">
                <input
                  name={radio.value}
                  type="radio"
                  value={radio.value}
                ></input>
                <label htmlFor={radio.value}>{radio.label}</label>
              </div>
            ))}
          </div>
        );
      case Libraries.mui:
        return (
          <RadioGroupMui row>
            {radios.map((radio) =>
              radio.label ? (
                <FormControlLabel
                  value={radio.value}
                  control={<RadioMui />}
                  label={radio.label}
                />
              ) : (
                <RadioMui value={radio.value} />
              )
            )}
          </RadioGroupMui>
        );
      case Libraries.radix:
        return (
          <RadioGroupRadix.Root className="flex flex-row items-center gap-2">
            {radios.map((radio) =>
              radio.label ? (
                <TextRadix as="label" size="2">
                  <div className="flex flex-row gap-1">
                    <RadioGroupRadix.Item
                      value={radio.value}
                      onClick={radio.onClick}
                    />
                    {radio.label}
                  </div>
                </TextRadix>
              ) : (
                <RadioGroupRadix.Item
                  value={radio.value}
                  onClick={radio.onClick}
                />
              )
            )}
          </RadioGroupRadix.Root>
        );
    }
  };

  return <>{Switch()}</>;
};

export default Radios;
