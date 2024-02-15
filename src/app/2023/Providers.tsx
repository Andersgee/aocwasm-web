"use client";

import { createContext, useContext, useEffect, useState } from "react";
import init, { type InitOutput } from "#src/wasm/2023";

const WasmContext = createContext<InitOutput | null>(null);

export function WasmProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState<InitOutput | null>(null);
  useEffect(() => {
    init()
      .then(setValue)
      .catch(() => {
        //ignore
      });
  }, []);

  return <WasmContext.Provider value={value}>{children}</WasmContext.Provider>;
}

export function useWasm() {
  const context = useContext(WasmContext);
  if (context === undefined) throw new Error("context does not have provider");
  return context;
}
