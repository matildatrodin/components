"use client";

import { Theme } from "@radix-ui/themes";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export enum Libraries {
  default = "default",
  mui = "mui",
  radix = "radix",
}

interface LibraryContextProps {
  library: Libraries;
  setLibrary: Dispatch<SetStateAction<Libraries>>;
}

const defaultContext = {
  library: Libraries.default,
  setLibrary: () => {},
};

export const LibraryContext =
  createContext<LibraryContextProps>(defaultContext);

interface LibraryProviderProps {
  children: ReactNode;
}

const LibraryProvider: FC<LibraryProviderProps> = ({ children }) => {
  const [library, setLibrary] = useState<Libraries>(Libraries.default);

  return (
    <LibraryContext.Provider value={{ library, setLibrary }}>
      {library === Libraries.radix ? <Theme>{children}</Theme> : children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
