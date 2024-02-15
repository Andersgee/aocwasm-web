import { labels } from "../labels";
import type { Metadata } from "next";
import { Comp } from "./Comp";

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Webassembly solutions - Day ${params.daynumber} - Advent of Code 2023`,
    description: `Webassembly solutions - Day ${params.daynumber} - Advent of Code 2023`,
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
      <h1 className="text-lg">
        --- Day {params.daynumber}: {labels[params.daynumber]} ---
      </h1>

      <p className="max-w-[55ch]">
        See advent of code problem description{" "}
        <a
          href={`https://adventofcode.com/2023/day/${params.daynumber}`}
          className="underline"
        >
          here
        </a>{" "}
        and get your puzzle input there aswell.
      </p>
      <Comp daynumber={params.daynumber} />
    </div>
  );
}
