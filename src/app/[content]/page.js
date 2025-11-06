import React from "react";
import tutorials from "@/../public/data/tutorials.json";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

SyntaxHighlighter.registerLanguage("python", python);

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function page({ params }) {
  console.log("params -->", params);

  // const slug = Array.isArray(params.content)
  //   ? params.content[0]
  //   : params.content;

  // console.log("slug →", slug);
  const resolvedParams = await params;

  // console.log("resolvedParams →", resolvedParams);

  const slug = Array.isArray(resolvedParams.content)
    ? resolvedParams.content[0]
    : resolvedParams.content;

  // console.log("slug →", slug);

  // console.log("t -->", tutorials[0].url);

  const pageData = tutorials.find((p) => p.id === slug);

  // console.log("page -->", page);

  return (
    <div>
      {pageData?.cardValues?.map((card, idx) => (
        <Card key={idx} className="ml-6 my-4 shadow-md">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            {/* <p>Card Content</p> */}
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
            {card.code ?? ""}
          </SyntaxHighlighter>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
