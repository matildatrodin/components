import { FC } from "react";
import Radios from "../components/radios/Radios";
import Card from "../components/card/Card";
import Heading from "../components/heading/Heading";

const HeadingsPage: FC = () => {
  return (
    <div>
      <Heading tag="h1">h1. heading </Heading>
      <Heading tag="h2">h2. heading</Heading>
      <Heading tag="h3">h3. heading</Heading>
      <Heading tag="h4">h4. heading</Heading>
      <Heading tag="h5">h5. heading</Heading>
      <Heading tag="h6">h6. heading</Heading>
    </div>
  );
};

export default HeadingsPage;
