import dynamic from "next/dynamic";

const ExcalidrawWrapper = dynamic(
  async () => (await import("@/components/ExcalidrawComp")).default,
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      Welcome to Excalidraw Integration
      <ExcalidrawWrapper />
    </main>
  );
}
