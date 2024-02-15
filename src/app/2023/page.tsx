import Link from "next/link";
import { labels } from "./labels";

export default function Page() {
  return (
    <div className="flex flex-col">
      {Object.entries(labels).map(([daynumber, label]) => (
        <Link
          key={daynumber}
          href={`/2023/${daynumber}`}
          className="bg-blue-300 hover:bg-blue-700 px-3 py-2"
        >
          {`--- Day ${daynumber}: ${label} ---`}
        </Link>
      ))}
    </div>
  );
}
