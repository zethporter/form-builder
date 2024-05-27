import NewFormItemDialog from "@/components/NewFormItemDialog";

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap justify-between p-2 gap-y-3">
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <span className="badge badge-info">Optional</span>
      </label>
      <NewFormItemDialog />
    </main>
  );
}
