"use client";
import React, { useEffect, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

// import { tutorial } from "@/data/tutorials.json";
// import { useParams } from "next/navigation";

// SyntaxHighlighter.registerLanguage("python", python);

export default function Home() {
  // const params = useParams();
  // console.log("Params:", params);
  // const [selectedTopic, setSelectedTopic] = useState(null)

  // useEffect(() => {
  //   fetch("/data/tutorials.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTopics(data.topics);
  //       setActiveTopic(data.topics[0]);
  //     });
  // }, []);
  return (
    <div>
      deneme
      </div>
    // <ContentArea topic={tutorial} />
    // <div>
    //   <SyntaxHighlighter
    //     language="python"
    //     style={docco}
    //     customStyle={{
    //       borderRadius: "0.5rem",
    //       fontSize: "0.9rem",
    //       padding: "1rem",
    //       margin: "1rem",
    //     }}
    //   >
    //     print("Hello, World!")
    //   </SyntaxHighlighter>
    // </div>
  );
}
