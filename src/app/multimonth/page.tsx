import MultiCalendar from "./MultiCalendar";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">FullCalendar React Multi Month Example</h1>
      <div className="flex h-full w-full p-5">
        <MultiCalendar />
      </div>
    </>
  );
}
