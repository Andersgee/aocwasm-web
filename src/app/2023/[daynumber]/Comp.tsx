"use client";

import { useRef, useState } from "react";
//import { day01solveA, day01solveB } from "#src/wasm/pkg";
import * as gluewasm from "#src/wasm/2023";
import { useWasm } from "../Providers";

type Props = {
  daynumber: string;
};

export function Comp({ daynumber }: Props) {
  const wasm = useWasm();
  const ref1 = useRef<HTMLTextAreaElement>(null);
  const ref2 = useRef<HTMLTextAreaElement>(null);
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");

  /** make ts happy. `func = gluewasm["funcname"]` */
  type S = Record<string, ((str: string) => string) | undefined>;
  const solveA = (gluewasm as unknown as S)[`day${daynumber}solveA`];
  const solveB = (gluewasm as unknown as S)[`day${daynumber}solveB`];

  return (
    <>
      <textarea
        ref={ref1}
        className="w-full max-w-sm font-mono"
        placeholder="puzzle input"
      />
      <div className="flex items-center gap-2">
        <button
          disabled={!wasm}
          type="button"
          className="shadow-md bg-white hover:bg-neutral-50 px-3 py-2"
          onClick={() => {
            if (ref1.current?.value) {
              try {
                setResult1(
                  solveA?.(ref1.current.value) ??
                    "didnt implement this solver yet"
                );
              } catch (error) {
                setResult1((error as { message: string }).message);
              }

              //setResult1(day01solveA(ref1.current.value));
            } else {
              setResult1("no input");
            }
          }}
        >
          solve part 1
        </button>
        <pre>{result1}</pre>
      </div>
      <div className="flex items-center gap-2">
        <button
          disabled={!wasm}
          type="button"
          className="shadow-md bg-white hover:bg-neutral-100 px-3 py-2"
          onClick={() => {
            if (ref1.current?.value) {
              try {
                setResult2(
                  solveB?.(ref1.current.value) ??
                    "didnt implement this solver yet"
                );
              } catch (error) {
                setResult2((error as { message: string }).message);
              }
              //setResult2(day01solveB(ref2.current.value));
            } else {
              setResult2("no input");
            }
          }}
        >
          solve part 2
        </button>
        <pre>{result2}</pre>
      </div>
    </>
  );
}
