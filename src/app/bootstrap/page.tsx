import BootstrapCalendar from "./BootstrapCalendar";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">FullCalendar Bootstrap Example</h1>
      <div className="flex h-full w-full p-5">
        <BootstrapCalendar />
      </div>
    </>
  );
}
