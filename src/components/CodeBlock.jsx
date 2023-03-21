import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";
function CodeBlock(props) {
  return (
    <div style={{padding: "1rem", backgroundColor: "#000", ...props.wrapperStyle}}>
      <CopyBlock
        language="jsx"
        text={props.children}
        theme={dracula}
        wrapLines
        showLineNumbers
        codeBlock
        {...props}
      />
    </div>
  );
}

export default CodeBlock;
