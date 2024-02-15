import Link from "next/link";
import { labels } from "./labels";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      {Object.entries(labels).map(([daynumber, label]) => (
        <Link
          key={daynumber}
          href={`/2023/${daynumber}`}
          className="shadow-md bg-white hover:bg-neutral-100 px-3 py-2"
        >
          {`--- Day ${daynumber}: ${label} ---`}
        </Link>
      ))}
    </div>
  );
}
