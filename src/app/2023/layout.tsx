import type { Metadata } from "next";
import { WasmProvider } from "./Providers";

export const metadata: Metadata = {
  title: `Webassembly solutions - Advent of Code 2023`,
  description: "webassembly solutions for advent of code 2023",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <WasmProvider>{children}</WasmProvider>
    </div>
  );
}
