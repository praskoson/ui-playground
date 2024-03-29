import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-8 p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <h1 className="">A smol playground where I try out UI stuff</h1>
      <ul className="grid w-full grid-cols-2 sm:grid-cols-4 [&>li]:underline [&>li]:underline-offset-4">
        <li>
          <Link className="" href="dialog">
            Native Dialog
          </Link>
        </li>
        <li>
          <Link className="" href="pretty-paginator">
            Paginator
          </Link>
        </li>
        <li>
          <Link className="" href="navigation-glass">
            Glass Nav
          </Link>
        </li>
        <li>
          <Link className="" href="like-button">
            Like Button (Framer)
          </Link>
        </li>
        <li>
          <Link className="" href="/scroll-cards">
            Scroll cards
          </Link>
        </li>
        <li>
          <Link className="" href="/designer-shadows">
            Designer shadows
          </Link>
        </li>
        <li>
          <Link className="" href="/scroll-listener-css">
            Scroll Animations with CSS
          </Link>
        </li>
      </ul>
    </main>
  );
}
