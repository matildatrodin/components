"use client";

import { FC, ReactNode } from "react";
import LibraryProvider from "./LibraryProvider";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <LibraryProvider>{children}</LibraryProvider>;
};

export default Providers;
