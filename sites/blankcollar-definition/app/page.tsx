import { DefinitionEntry } from "@/components/definition-entry";
import { Controls } from "@/components/controls";

export default function Home() {
  return (
    <main className="min-h-screen">
      <DefinitionEntry variant="page" />
      <Controls />
      <footer
        className="mx-auto w-full max-w-3xl px-6 pb-32 pt-4 text-xs"
        style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
      >
        blankcollar.com · the canonical definition
      </footer>
    </main>
  );
}
