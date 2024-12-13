declare module "react-syntax-highlighter" {
  import * as React from "react";

  export interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    showLineNumbers?: boolean;
    wrapLines?: boolean;
    children: React.ReactNode;
  }

  export class Prism extends React.Component<SyntaxHighlighterProps> {}
}

declare module "react-syntax-highlighter/dist/esm/styles/prism";
