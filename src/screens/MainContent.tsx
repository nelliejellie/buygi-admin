import React from "react";
import TabComponent from "../components/Tabs/TabComponent";
import BasicTabs from "../components/Tabs/BasicTabs";
import IconTabs from "../components/Tabs/IconTabs";

const MainContent = () => (
  <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TabComponent title="Default Tabs">
        <BasicTabs />
      </TabComponent>

      <TabComponent title="Tabs With Underline">
        <BasicTabs variant="underline" />
      </TabComponent>

      <TabComponent title="Tabs With Icons">
        <IconTabs />
      </TabComponent>

      <TabComponent title="Tabs Pills">
        <BasicTabs variant="pills" />
      </TabComponent>

      <TabComponent title="Justified Tabs">
        <BasicTabs variant="justified" />
      </TabComponent>

      <TabComponent title="Tabs Pills Justified">
        <BasicTabs variant="pills" />
      </TabComponent>
    </div>
  </div>
);

export default MainContent;
