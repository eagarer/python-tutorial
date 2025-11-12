"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed } from "lucide-react";

export default function OutputToggle({ output }) {
  const [show, setShow] = React.useState(false);

  return (
    <div className="w-full flex items-start space-x-4">
      {/* Buton */}
      <Button
        variant="outline"
        className="w-10 h-10 p-0 flex items-center justify-center"
        onClick={() => setShow(!show)}
      >
        {show ? <Eye /> : <EyeClosed />}
      </Button>

      {/* Pre */}
      <pre
        className={`flex-1 bg-gray-100 p-2 rounded text-sm whitespace-pre-wrap transition-all duration-300 ${
          show ? "blur-0 opacity-100" : "blur-sm opacity-50"
        }`}
      >
        {output}
      </pre>
    </div>
  );
}
