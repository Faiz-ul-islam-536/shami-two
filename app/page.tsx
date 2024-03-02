"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Slider from "../components/slider";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <Slider />
      </section>
      <section>
        <Slider />
      </section>
      {/* <div className={styles.center}></div> */}
    </main>
  );
}
