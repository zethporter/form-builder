import Link from "next/link";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap justify-between p-2 gap-y-3">
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <span className="badge badge-info">Optional</span>
      </label>
      <Link href="/form-builder/99999" className="btn btn-primary">
        <DocumentTextIcon className="w-6 h-6" />
        New Form
      </Link>
      {/* <NewFormItemDialog /> */}
    </main>
  );
}
