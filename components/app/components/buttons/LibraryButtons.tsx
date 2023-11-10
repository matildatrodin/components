import { FC, useContext } from "react";
import Button from "./Button";
import { Libraries, LibraryContext } from "../../context/LibraryProvider";
import Text from "../Text/Text";

const LibraryButtons: FC = () => {
  const { setLibrary } = useContext(LibraryContext);

  return (
    <div className="flex flex-col fixed top-0 bg-sky p-3 rounded-b-md gap-2">
      <div className="flex flex-row gap-2">
        <Button onClick={() => setLibrary(Libraries.default)} size="small">
          html
        </Button>
        <Button onClick={() => setLibrary(Libraries.mui)} size="small">
          mui
        </Button>
        <Button onClick={() => setLibrary(Libraries.radix)} size="small">
          radix
        </Button>
      </div>
      <div>
        <Text size="small" color="white">
          switch theme here
        </Text>
      </div>
    </div>
  );
};

export default LibraryButtons;
