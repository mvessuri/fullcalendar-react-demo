import Calendar from "@/components/Calendar";

export default function Home() {
  return (
    <main className="w-full flex h-svh overflow-hidden flex-col">
      <h1 className="text-4xl font-bold text-center">FullCalendar React Example</h1>
      <div className="flex h-full w-full p-5">
          <Calendar />
      </div>
    </main>
  );
}
