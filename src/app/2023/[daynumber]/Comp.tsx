"use client";

import { useRef, useState } from "react";
//import { day01solveA, day01solveB } from "#src/wasm/pkg";
import * as gluewasm from "#src/wasm/pkg";
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
  const solveA = (gluewasm as unknown as S)[`day0${daynumber}solveA`];
  const solveB = (gluewasm as unknown as S)[`day0${daynumber}solveB`];

  return (
    <>
      <textarea
        ref={ref1}
        className="w-full max-w-sm"
        placeholder="input (part 1)"
      />
      <div className="flex">
        <button
          disabled={!wasm}
          type="button"
          className="bg-blue-500 px-3 py-2 disabled:bg-neutral-500"
          onClick={() => {
            if (ref1.current?.value) {
              try {
                setResult1(
                  solveA?.(ref1.current.value) ??
                    "didnt implement this solver yet :("
                );
              } catch (error) {
                setResult1((error as { message: string }).message);
              }

              //setResult1(day01solveA(ref1.current.value));
            }
          }}
        >
          solve
        </button>
        <pre>{result1}</pre>
      </div>
      <hr />
      <textarea
        ref={ref2}
        className="w-full max-w-sm"
        placeholder="input (part 2)"
      />
      <div className="flex">
        <button
          disabled={!wasm}
          type="button"
          className="bg-blue-500 px-3 py-2 disabled:bg-neutral-500"
          onClick={() => {
            if (ref2.current?.value) {
              try {
                setResult2(
                  solveB?.(ref2.current.value) ??
                    "didnt implement this solver yet :("
                );
              } catch (error) {
                setResult2((error as { message: string }).message);
              }
              //setResult2(day01solveB(ref2.current.value));
            }
          }}
        >
          solve
        </button>
        <pre>{result2}</pre>
      </div>
    </>
  );
}
