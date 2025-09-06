import React, { useState } from "react";
import Header from "./Header";
import WorkIcons from "./Workicon";
import Footer from "./Footer";

export default function Work() {
  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode>(null);

  return (
    <div>
      <Header />
      <WorkIcons onSelect={setSelectedComponent} />

      <div className="infonewdiv">
        {selectedComponent}
      </div>
      
      <Footer />
    </div>
  );
}
