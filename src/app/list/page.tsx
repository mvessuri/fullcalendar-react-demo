import ListCalendar from "./ListCalendar";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">FullCalendar React List Example</h1>
      <div className="flex h-full w-full p-5">
        <ListCalendar />
      </div>
    </>
  );
}
