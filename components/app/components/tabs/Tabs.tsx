import { FC, ReactNode, useContext } from "react";
import { Tab as TabMui, Tabs as TabsMui } from "@mui/material";
import { Tabs as TabsRadix } from "@radix-ui/themes";
import { Libraries, LibraryContext } from "@/app/context/LibraryProvider";

interface TabType {
  label: string;
  onClick?: () => void;
}

interface TabsProps {
  activeTab: string;
  tabs: TabType[];
}

export const Tabs: FC<TabsProps> = ({ activeTab, tabs }) => {
  const { library } = useContext(LibraryContext);

  const Switch = () => {
    switch (library) {
      default:
      case Libraries.default:
        return (
          <div className="flex flex-row">
            {tabs.map((tab) => (
              <button
                onClick={tab.onClick}
                className={
                  "bg-white " +
                  (activeTab === tab.label
                    ? "border-b-1 border-t-0 border-l-0 border-r-0"
                    : "border-b-1 border-t-0 border-l-0 border-r-0 border-transparent")
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        );
      case Libraries.mui:
        return (
          <TabsMui value={activeTab}>
            {tabs.map((tab) => (
              <TabMui
                value={tab.label}
                label={tab.label}
                onClick={tab.onClick}
              />
            ))}
          </TabsMui>
        );
      case Libraries.radix:
        return (
          <TabsRadix.Root value={activeTab}>
            <TabsRadix.List>
              {tabs.map((tab) => (
                <TabsRadix.Trigger value={tab.label} onClick={tab.onClick}>
                  {tab.label}
                </TabsRadix.Trigger>
              ))}
            </TabsRadix.List>
          </TabsRadix.Root>
        );
    }
  };

  return <>{Switch()}</>;
};
