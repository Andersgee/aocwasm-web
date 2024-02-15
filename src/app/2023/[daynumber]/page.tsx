import { labels } from "../labels";
import type { Metadata } from "next";
import { Comp } from "./Comp";

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Webassembly solutions - Day ${params.daynumber} - Advent of Code 2023`,
  };
}

type Props = {
  params: { daynumber: string };
};

/** make ts happy. `func = gluewasm["funcname"]` */
type S = Record<string, ((str: string) => string) | undefined>;

export default function Page({ params }: Props) {
  return (
    <div className="space-y-4">
      <a
        href="https://adventofcode.com/2023/day/1"
        className="underline decoration-dotted"
      >
        <h1>
          --- Day {params.daynumber}: {labels[params.daynumber]} ---
        </h1>
      </a>
      <Comp daynumber={params.daynumber} />
    </div>
  );
}
