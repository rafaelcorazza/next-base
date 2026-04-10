export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
        <span className="mb-6 inline-flex w-fit rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600">
          Base operacional
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Next Base
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          Estrutura mínima para criar landing pages, protótipos e sistemas
          simples com rapidez, clareza e deploy na Vercel.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://github.com/rafaelcorazza/next-base"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Ver repositório
          </a>

          <a
            href="https://next-base-neon-six.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
          >
            Ver deploy
          </a>
        </div>
      </section>
    </main>
  );
}
