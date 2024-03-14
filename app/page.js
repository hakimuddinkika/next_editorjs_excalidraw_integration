"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

let CustomEditor = dynamic(() => import('@/components/Editor'), {
  ssr: false
});

const ExcalidrawWrapper = dynamic(
  async () => (await import("@/components/ExcalidrawComp")).default,
  {
    ssr: false,
  },
);

export default function Home() {
  let [editorInstance, setEditorInstance] = useState({}) // to get the instance of editor.Js

  const handleInstance = (instance) => {
    setEditorInstance(instance)
  }

  return (
    <main className="min-h-screen items-center bg-slate-200">
      <h2 className="font-semibold flex justify-center items-center p-2 from-stone-800">
        Welcome to EditorJS | Excalidraw Integration
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" bg-stone-100 p-4 m-4">
          {CustomEditor && <CustomEditor handleInstance={handleInstance}/>}
        </div>
        <div className=" bg-stone-100 p-4 m-4">
          <ExcalidrawWrapper />
        </div>
      </div>
    </main>
  );
}
