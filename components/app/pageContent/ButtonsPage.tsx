import { FC } from "react";
import Radios from "../components/radios/Radios";
import Card from "../components/card/Card";
import Heading from "../components/heading/Heading";

const ButtonsPage: FC = () => {
  return (
    <div>
      <Heading tag="h4">Highlights</Heading>
      <Card>
        <div className="mb-2">
          <Heading tag="h6">Radio</Heading>
        </div>
        <Radios radios={[{ value: "1" }, { value: "2", label: "label" }]} />
      </Card>
    </div>
  );
};

export default ButtonsPage;
