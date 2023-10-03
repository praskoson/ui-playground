import { CSSProperties } from "react";
import styles from "./navigation.module.css";

// https://codesandbox.io/s/realistic-glass-aka-bien-glass-mk5phz?file=/src/index.mjs

export default function Page() {
  return (
    <div className="h-[6000px] bg-[url(https://e0.pxfuel.com/wallpapers/443/886/desktop-wallpaper-sunset-dark-theme-minimal-nature-dark-minimalist-theme-sun.jpg)] [background-position:0_0] [background-size:100%]">
      <div className={styles.pink}></div>
      <div className={styles.blue}></div>
      <div className={styles.green}></div>
      <nav className="sticky inset-x-0 top-0 h-[100px]">
        <div
          style={
            {
              "--extended-by": "100px",
              "--filter": "blur(30px)",
              "--cutoff": "calc(100% - var(--extended-by))",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0,black var(--cutoff), transparent var(--cutoff))",
            } as CSSProperties
          }
          className="pointer-events-none absolute inset-0 bottom-[calc(-1*var(--extended-by))] [backdrop-filter:var(--filter)]"
        ></div>
        <div className={styles["bien-glass-edge"]}></div>
      </nav>
    </div>
  );
}
