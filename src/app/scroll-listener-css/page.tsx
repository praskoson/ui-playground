import Image from "next/image";
import styles from "./scroll.module.css";
import "@/styles/scroll-based.css";
import { cn } from "@/components/classutils";

const lorem =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam unde veritatis, quaerat molestias accusamus quasi voluptatibus alias sit suscipit, velit placeat, vitaeconsequatur expedita. Deserunt, itaque incidunt ullam repellendus labore modi dolor asperiores molestias architecto enim, facere harum, quos ipsam at. Rerum error dolore eaque.";

export default function Page() {
  // return (
  //   <div className="content">
  //     <h1>Content</h1>

  //     <p>
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //       labore et dolore magna aliqua. Risus quis varius quam quisque id. Et ligula ullamcorper
  //       malesuada proin libero nunc consequat interdum varius. Elit ullamcorper dignissim cras
  //       tincidunt lobortis feugiat vivamus at augue.
  //     </p>

  //     <p>
  //       Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate dignissim. Tortor
  //       aliquam nulla facilisi cras. A erat nam at lectus urna duis convallis convallis. Nibh ipsum
  //       consequat nisl vel pretium lectus. Sagittis aliquam malesuada bibendum arcu vitae elementum.
  //       Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit.
  //     </p>

  //     <div className="subject animation"></div>

  //     <p>
  //       Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu cursus vitae congue
  //       mauris rhoncus aenean vel. Sit amet cursus sit amet dictum. Augue neque gravida in fermentum
  //       et. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Risus quis varius quam
  //       quisque id diam vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
  //       quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat imperdiet sed
  //       euismod nisi. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Netus et
  //       malesuada fames ac.
  //     </p>
  //   </div>
  // );
  return (
    <div className="relative">
      <div className="relative grid h-svh w-full place-items-center bg-[url('../media/pexels.jpg')] bg-contain bg-center">
        <div className="absolute inset-0 bg-violet-600/10" />

        <div className={styles["scroll-watcher"]}></div>

        <section className="mx-auto w-full max-w-5xl space-y-5 rounded-3xl bg-center p-4 font-sans text-gray-50 ring-1 ring-white/5 backdrop-blur-md sm:p-8">
          <h1 className="text-left text-7xl font-bold">CSS-only scroll-driven animations are 🔥</h1>
          <p className="text-balance text-xl">
            Scroll-driven animation was something that we used to rely on JavaScript for, with the
            help of scrollListeners and intersection observers.
          </p>
          <p className="text-balance text-xl">
            Luckily for us, scroll-driven animations are coming to be a CSS feature, and they make
            life so much simpler and more performant.
          </p>
        </section>
      </div>
      <div className="mx-auto w-full max-w-[70ch] space-y-16 py-10">
        <article className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quo.
          </h1>
          <Image
            src="/images/ricardo-loaiza.jpg"
            alt=""
            className={cn("animation aspect-video w-4/5 object-contain")}
            width={400}
            height={400}
          />
          <p>{lorem}</p>
        </article>
        <article className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quo.
          </h1>
          <Image
            src="/images/zulian-firmansyah.jpg"
            alt=""
            className={cn("animation aspect-video w-4/5 object-contain")}
            width={400}
            height={400}
          />
          <p>{lorem}</p>
        </article>
        <article className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quo.
          </h1>
          <Image
            src="/images/nick-andreka.jpg"
            alt=""
            className={cn("animation aspect-video w-4/5 object-contain")}
            width={400}
            height={400}
          />
          <p>{lorem}</p>
        </article>
      </div>
      <div className="absolute inset-x-0 bottom-4 px-6 ">Hello there</div>
    </div>
  );
}
