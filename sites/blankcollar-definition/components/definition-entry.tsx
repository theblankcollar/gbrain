import { definition } from "@/lib/definition";

type Props = {
  variant?: "page" | "card";
};

export function DefinitionEntry({ variant = "page" }: Props) {
  const isCard = variant === "card";

  return (
    <article
      className={
        isCard
          ? "flex h-full flex-col justify-between"
          : "mx-auto w-full max-w-3xl px-6 py-16 md:py-24"
      }
    >
      <header className={isCard ? "" : "mb-10"}>
        <h1
          style={{ fontFamily: "var(--font-serif)" }}
          className={
            isCard
              ? "text-[88px] leading-[0.9] font-[600] tracking-tight"
              : "text-5xl md:text-7xl font-[600] tracking-tight leading-[0.95]"
          }
        >
          {definition.headword}
        </h1>

        <div
          className={
            isCard
              ? "mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-1 text-[22px]"
              : "mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-base md:text-lg"
          }
          style={{ color: "var(--muted)" }}
        >
          <span style={{ fontFamily: "var(--font-mono)" }}>{definition.ipa}</span>
          <span className="italic" style={{ fontFamily: "var(--font-serif)" }}>
            {definition.partOfSpeech}
          </span>
          <span>
            also{" "}
            <span className="italic" style={{ fontFamily: "var(--font-serif)" }}>
              {definition.variants.join(", ")}
            </span>
          </span>
        </div>
      </header>

      <ol className={isCard ? "space-y-5 mt-8" : "space-y-8"}>
        {definition.senses.map((sense) => (
          <li key={sense.n} className="flex gap-4">
            <span
              style={{
                color: "var(--accent)",
                fontFamily: "var(--font-serif)",
              }}
              className={
                isCard
                  ? "text-[28px] font-[600] leading-none pt-1 shrink-0"
                  : "text-2xl md:text-3xl font-[600] leading-none pt-1 shrink-0"
              }
            >
              {sense.n}
            </span>
            <div className="flex-1">
              {"label" in sense && sense.label && (
                <span
                  className={
                    isCard
                      ? "italic text-[18px] mr-2"
                      : "italic text-sm md:text-base mr-2"
                  }
                  style={{
                    color: "var(--muted)",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  {sense.label}.
                </span>
              )}
              <span
                className={
                  isCard
                    ? "text-[22px] leading-[1.4]"
                    : "text-lg md:text-xl leading-relaxed"
                }
              >
                {sense.gloss}
              </span>
              {!isCard && sense.example && (
                <p
                  className="mt-2 italic text-base md:text-lg"
                  style={{
                    color: "var(--muted)",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  &ldquo;{sense.example}&rdquo;
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      {!isCard && (
        <section className="mt-12 pt-8 border-t" style={{ borderColor: "var(--muted)" }}>
          <h2
            className="text-sm uppercase tracking-[0.2em] mb-3"
            style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
          >
            {definition.adjective.partOfSpeech}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            <span
              className="italic font-[600] mr-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              blank-collar
            </span>
            {definition.adjective.gloss}
          </p>
          <p
            className="mt-2 italic text-base md:text-lg"
            style={{ color: "var(--muted)", fontFamily: "var(--font-serif)" }}
          >
            &ldquo;{definition.adjective.example}&rdquo;
          </p>
        </section>
      )}

      {!isCard && (
        <section className="mt-10">
          <h2
            className="text-sm uppercase tracking-[0.2em] mb-3"
            style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
          >
            Origin
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {definition.origin}
          </p>
        </section>
      )}

      {isCard && (
        <footer className="mt-auto pt-8 flex items-end justify-between">
          <div
            className="text-[18px] italic max-w-[60%] leading-snug"
            style={{ fontFamily: "var(--font-serif)", color: "var(--muted)" }}
          >
            {definition.philosophy}
          </div>
          <div
            className="text-[24px] font-[600] tracking-tight"
            style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
          >
            #blankcollar
          </div>
        </footer>
      )}
    </article>
  );
}
