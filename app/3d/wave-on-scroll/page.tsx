"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function WaveOnScroll() {
  const jsxCode = `
function waveOnScroll() {
  // Code for wave on scroll effect
  console.log("Wave effect active!");
}
  `;

  const cssCode = `
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: wave 2s infinite;
}

@keyframes wave {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}
  `;

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">3D Wave on Scroll</h1>
      <p className="text-gray-600 mb-8">
        Create an engaging 3D wave effect that animates as users scroll through
        your page.
      </p>
      <Tabs>
        <TabList>
          <Tab>JSX</Tab>
          <Tab>CSS</Tab>
        </TabList>

        <TabPanel>
          <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
            {jsxCode}
          </SyntaxHighlighter>
        </TabPanel>

        <TabPanel>
          <SyntaxHighlighter language="css" style={vscDarkPlus}>
            {cssCode}
          </SyntaxHighlighter>
        </TabPanel>
      </Tabs>
    </div>
  );
}
