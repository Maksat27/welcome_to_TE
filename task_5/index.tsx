"use client";

import { useState } from "react";
import useSWR from "swr";

import styles from "./page.module.css";

import { fetchOnePost } from "@/libs/fetchOnePost";

const POST_KEY = "one_post";

const ComponentOne = () => {
  const { data } = useSWR(POST_KEY, () => fetchOnePost({ delayMS: 0 }));
  //...some logic

  return data ? (
    <div className={styles.card}>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <span>ComponentOne</span>
    </div>
  ) : (
    <div>...Loading ComponentOne</div>
  );
};

const ComponentTwo = () => {
  const { data } = useSWR(POST_KEY, () => fetchOnePost({ delayMS: 2000 }), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  //...some logic

  return data ? (
    <div className={styles.card}>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <span>ComponentTwo</span>
    </div>
  ) : (
    <div>...Loading ComponentTwo</div>
  );
};

export default function Home() {
  const [showComponentTwo, setShowComponentTwo] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ComponentOne />
        {showComponentTwo ? (
          <ComponentTwo />
        ) : (
          <button
            className={styles.btn}
            onClick={() => setShowComponentTwo(true)}
          >
            Show ComponentTwo
          </button>
        )}
      </div>
    </main>
  );
}
