import React from "react";

function ContentArea() {
  return (
    <div>
      <SyntaxHighlighter
        language="python"
        style={docco}
        customStyle={{
          borderRadius: "0.5rem",
          fontSize: "0.9rem",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        print("Hello, World!")
      </SyntaxHighlighter>
    </div>
  );
}

export default ContentArea;
