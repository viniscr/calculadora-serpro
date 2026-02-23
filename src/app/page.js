import Calculator from "@/components/calculator";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:px-24 xl:px-32">
      <div className="w-full max-w-7xl">
        <Calculator />
      </div>
    </main>
  );
}
