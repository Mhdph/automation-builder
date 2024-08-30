import { ConnectionsProvider } from "@/providers/connections-provider";
import EditorProvider from "@/providers/editor-providet";
import React from "react";

function page() {
  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <></>
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
}

export default page;
