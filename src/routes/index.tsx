import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import roomImage from "@/assets/keyboard-room.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glassboard — Virtual Keyboard" },
      { name: "description", content: "A polished, touch-friendly virtual keyboard with predictive text." },
      { property: "og:title", content: "Glassboard — Virtual Keyboard" },
      { property: "og:description", content: "A polished, touch-friendly virtual keyboard with predictive text." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type KeyDef = { label: string; value?: string; grow?: number; action?: string };

const functionRow: KeyDef[] = ["esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "prt sc", "scr lk", "pause"].map((label) => ({ label }));
const numberRow: KeyDef[] = [
  { label: "`" }, ..."1234567890-=".split("").map((label) => ({ label })),
  { label: "backspace", grow: 1.55, action: "backspace" }, { label: "insert" }, { label: "home" }, { label: "pg up" },
];
const qwertyRow: KeyDef[] = [
  { label: "tab", value: "\t", grow: 1.45 }, ..."qwertyuiop[]\\".split("").map((label) => ({ label })),
  { label: "delete", action: "backspace", grow: 1.2 }, { label: "end" }, { label: "pg dn" },
];
const homeRow: KeyDef[] = [
  { label: "caps", grow: 1.65, action: "caps" }, ..."asdfghjkl;'".split("").map((label) => ({ label })),
  { label: "enter", value: "\n", grow: 2.05 },
];
const bottomRow: KeyDef[] = [
  { label: "shift", grow: 2.1, action: "shift" }, ..."zxcvbnm,./".split("").map((label) => ({ label })),
  { label: "shift", grow: 1.8, action: "shift" }, { label: "↑", action: "up" },
];
const controlRow: KeyDef[] = [
  { label: "ctrl" }, { label: "win" }, { label: "alt" }, { label: "space", value: " ", grow: 5.35 },
  { label: "alt" }, { label: "fn" }, { label: "menu" }, { label: "ctrl" },
  { label: "←", action: "left" }, { label: "↓", action: "down" }, { label: "→", action: "right" },
];

const dictionary = ["I", "The", "I'm", "This", "There", "That", "Your", "You", "We", "Welcome"];

function Index() {
  const [text, setText] = useState("The bed");
  const [caps, setCaps] = useState(false);
  const [shift, setShift] = useState(false);

  const suggestions = useMemo(() => {
    const current = text.trim().split(/\s+/).at(-1)?.toLowerCase() ?? "";
    const matches = dictionary.filter((word) => word.toLowerCase().startsWith(current) && word.toLowerCase() !== current);
    return [...matches, ...dictionary].filter((word, index, all) => all.indexOf(word) === index).slice(0, 3);
  }, [text]);

  const press = (key: KeyDef) => {
    if (key.action === "backspace") return setText((value) => value.slice(0, -1));
    if (key.action === "caps") return setCaps((value) => !value);
    if (key.action === "shift") return setShift((value) => !value);
    if (key.action) return;
    const raw = key.value ?? (key.label.length === 1 ? key.label : "");
    if (!raw) return;
    const output = caps !== shift ? raw.toUpperCase() : raw;
    setText((value) => value + output);
    if (shift) setShift(false);
  };

  const chooseSuggestion = (word: string) => {
    setText((value) => `${value.replace(/\S+$/, "").trimEnd()}${value.match(/\s$/) ? "" : value.includes(" ") ? " " : ""}${word} `);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === "Backspace") setText((value) => value.slice(0, -1));
      else if (event.key === "Enter") setText((value) => `${value}\n`);
      else if (event.key.length === 1) setText((value) => value + event.key);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const renderRow = (keys: KeyDef[], compact = false) => (
    <div className="flex min-w-[850px] gap-1.5 sm:gap-2">
      {keys.map((key, index) => (
        <Button
          key={`${key.label}-${index}`}
          type="button"
          variant="key"
          size={compact ? "functionKey" : "key"}
          aria-label={key.label}
          aria-pressed={key.action === "caps" ? caps : key.action === "shift" ? shift : undefined}
          onClick={() => press(key)}
          className={(key.action === "caps" && caps) || (key.action === "shift" && shift) ? "bg-key-active" : ""}
          style={{ flex: key.grow ?? 1 }}
        >
          {key.label.length === 1 && /[a-z]/.test(key.label) && (caps !== shift) ? key.label.toUpperCase() : key.label}
        </Button>
      ))}
    </div>
  );

  return (
    <main className="relative min-h-dvh overflow-hidden bg-background">
      <img src={roomImage} alt="Modern living room with a teal sofa" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-foreground/10" aria-hidden="true" />
      <section aria-label="Virtual keyboard" className="keyboard-glass absolute inset-x-[3vw] bottom-[4vh] mx-auto max-w-[1450px] overflow-hidden rounded-[32px] px-4 pb-5 pt-5 text-key-foreground sm:px-6 sm:pb-8 sm:pt-7 lg:px-8">
        <div className="keyboard-glow pointer-events-none absolute inset-x-0 bottom-0 h-48" aria-hidden="true" />
        <div className="relative z-10">
          <div className="flex min-h-16 items-center justify-center px-4 pb-4 text-center text-[clamp(1.35rem,2.5vw,2.25rem)] font-normal whitespace-pre-wrap" aria-live="polite">
            <span>{text || " "}</span><span className="caret ml-1 inline-block h-[1.15em] w-px bg-key-foreground" aria-hidden="true" />
          </div>

          <div className="mb-5 grid grid-cols-3 gap-2 sm:mb-6 sm:gap-4">
            {suggestions.map((suggestion) => (
              <Button key={suggestion} type="button" variant="suggestion" size="suggestion" onClick={() => chooseSuggestion(suggestion)}>
                {suggestion}
              </Button>
            ))}
          </div>

          <div className="overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="grid min-w-[850px] gap-1.5 sm:gap-2">
              {renderRow(functionRow, true)}
              {renderRow(numberRow)}
              {renderRow(qwertyRow)}
              {renderRow(homeRow)}
              {renderRow(bottomRow)}
              {renderRow(controlRow)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
