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
  const [tabContent, setTabContent] = useState<"Profile" | "Experiences">(
    "Profile"
  );

  const PageContent = () => {
    switch (tabContent) {
      case "Profile":
        return <SurfacesPage />;
      case "Experiences":
        return <ButtonsPage />;
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-24">
      <LibraryButtons />
      <div className="flex flex-col items-center">
        <div className="w-1/2">
          <div className="mb-4">
            <Heading tag="h2">matilda trodin</Heading>
          </div>
          <Tabs
            activeTab={tabContent}
            tabs={[
              {
                label: "Profile",
                onClick: () => setTabContent("Profile"),
              },
              {
                label: "Experiences",
                onClick: () => setTabContent("Experiences"),
              },
            ]}
          />
        </div>
      </div>
      <div className="mt-4">{PageContent()}</div>
    </main>
  );
}
