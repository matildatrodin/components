"use client";
import "@radix-ui/themes/styles.css";
import Heading from "./components/heading/Heading";
import Text from "./components/Text/Text";
import LibraryButtons from "./components/buttons/LibraryButtons";
import { Tabs } from "./components/tabs/Tabs";
import { useState } from "react";
import ButtonsPage from "./pageContent/ButtonsPage";
import SurfacesPage from "./pageContent/SurfacesPage";
import HeadingsPage from "./pageContent/HeadingsPage";

export default function Home() {
  const [tabContent, setTabContent] = useState<
    "Buttons" | "Menus" | "Headings" | "Surfaces"
  >("Surfaces");

  const PageContent = () => {
    switch (tabContent) {
      case "Surfaces":
        return <SurfacesPage />;
      case "Buttons":
        return <ButtonsPage />;
      case "Headings":
        return <HeadingsPage />;
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="mb-2 h-6">
        <Text>switch theme here</Text>
      </div>
      <LibraryButtons />
      <div className="mb-4">
        <Heading>components frenzy</Heading>
      </div>
      <Tabs
        activeTab={tabContent}
        tabs={[
          {
            label: "Surfaces",
            onClick: () => setTabContent("Surfaces"),
          },
          {
            label: "Buttons",
            onClick: () => setTabContent("Buttons"),
          },
          {
            label: "Menus",
            onClick: () => setTabContent("Menus"),
          },
          {
            label: "Headings",
            onClick: () => setTabContent("Headings"),
          },
        ]}
      />
      <div className="mt-4">{PageContent()}</div>
    </main>
  );
}
