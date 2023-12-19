import { cn } from "@/components/classutils";
import styles from "./card.module.css";
import { CSSProperties } from "react";

export default function Page() {
  return (
    <div className="h-screen w-full bg-white">
      <div className="mx-auto w-full max-w-7xl text-gray-950">
        <section className="p-4 sm:p-8">
          <div className="my-4">
            <h1 className="mb-1 text-sm font-semibold">
              This is how real designers create stacked shadows
            </h1>
            <p className="text-sm">
              https://twitter.com/PixelJanitor &
              https://twitter.com/PixelJanitor/status/1736834112223109411
            </p>
          </div>
          <div className="flex gap-5">
            <div id="card1" className={styles.card}>
              <div className="p-4">CSS</div>
            </div>
            <div
              id="card2"
              style={{ "--shadow": "rgb(0 0 0 / 0.06)" } as CSSProperties}
              className={cn(
                "h-48 w-48 rounded-3xl bg-gradient-to-b from-white to-white/[0.02] shadow-black/[0.06]",
                "shadow-[0_0_0_1px_var(--tw-shadow-color),0_1px_1px_-0.5px_var(--tw-shadow-color),0_3px_3px_-1.5px_var(--tw-shadow-color),0_6px_6px_-3px_var(--tw-shadow-color),0_12px_12px_-6px_var(--tw-shadow-color)0_24px_24px_-12px_var(--tw-shadow-color)]",
              )}
            >
              <div className="p-4">Tailwind</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
