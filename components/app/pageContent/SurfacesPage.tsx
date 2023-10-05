import { FC, useContext } from "react";
import Card from "../components/card/Card";
import Heading from "../components/heading/Heading";
import {
  Card as CardMui,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Card as CardRadix, Inset, Text as MuiText } from "@radix-ui/themes";
import { Libraries, LibraryContext } from "../context/LibraryProvider";
import image from "../assets/images/collaboration.jpeg";
import Text from "../components/Text/Text";

const SurfacesPage: FC = () => {
  const { library } = useContext(LibraryContext);

  const Switch = () => {
    switch (library) {
      case Libraries.default:
        return (
          <div className="flex flex-row gap-4">
            <div className="p-3 rounded shadow">
              <Heading tag="h3">basic card</Heading>
              <Text>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </div>
            <div className="p-3 rounded outline">
              <Heading tag="h3">outlined card</Heading>
              <Text>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </div>
          </div>
        );
      case Libraries.mui:
        return (
          <div>
            <div className="mb-4">
              <Typography variant="h5" fontWeight={600}>
                variations
              </Typography>
            </div>
            <div className="flex flex-row gap-4">
              <CardMui>
                <CardContent>
                  <Typography variant="h6">basic card</Typography>
                  <Typography>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </CardContent>
              </CardMui>
              <CardMui variant="outlined">
                <CardContent>
                  <Typography variant="h6">outlined card</Typography>
                  <Typography>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </CardContent>
              </CardMui>
              <CardMui>
                <CardMedia sx={{ height: 144 }} image={image.src} />
                <CardContent>
                  <Typography variant="h6">card with media</Typography>
                  <Typography>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </CardContent>
              </CardMui>
            </div>
          </div>
        );
      case Libraries.radix:
        return (
          <div className="flex flex-row gap-4 w-full">
            <CardRadix>
              <Heading tag="h6">basic card</Heading>
              <div className="mb-4">
                <Text>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </div>
              <Text>
                ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </CardRadix>
            <CardRadix variant="classic">
              <Heading tag="h6">card with elevation</Heading>
              <div className="mb-4">
                <Text>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </div>
              <Text>
                ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </CardRadix>
            <CardRadix>
              <Inset>
                <img src={image.src} className="h-36" />
              </Inset>
              <Heading tag="h6">card with media</Heading>
              <Text>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </CardRadix>
          </div>
        );
    }
  };
  return <div>{Switch()}</div>;
};

export default SurfacesPage;
