import { FC, useContext } from "react";
import Button from "./Button";
import { Libraries, LibraryContext } from "../../context/LibraryProvider";

const LibraryButtons: FC = () => {
  const { setLibrary } = useContext(LibraryContext);

  return (
    <div className="flex mb-4 h-10 items-center">
      <div className="flex flex-row gap-2">
        <Button onClick={() => setLibrary(Libraries.default)}>Default</Button>
        <Button onClick={() => setLibrary(Libraries.mui)}>Mui</Button>
        <Button onClick={() => setLibrary(Libraries.radix)}>Radix</Button>
      </div>
    </div>
  );
};

export default LibraryButtons;
