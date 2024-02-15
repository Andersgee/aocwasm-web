import type { Metadata } from "next";
import { WasmProvider } from "./Providers";

export const metadata: Metadata = {
  title: "2023",
  description: "webassembly solutions for advent of code 2023",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <WasmProvider>{children}</WasmProvider>
    </div>
  );
}
