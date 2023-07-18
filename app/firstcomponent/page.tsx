import Profile from "../components/FirstComponent/Profile";

export default function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <section>
            <h1>Amazing scientist</h1>
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </section>
        </div>
      </main>
    </>
  );
}
