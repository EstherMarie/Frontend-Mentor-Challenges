import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Card.module.scss";

interface ApiData {
  slip: {
    id: number;
    advice: string;
  };
}

export default function Card() {
  const [data, setData] = useState<ApiData>();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
      });
  }

  return (
    <div className={styles.card}>
      <div className={styles.advice}>ADVICE #{data?.slip.id}</div>

      <p className={styles.quote}>{data?.slip.advice}</p>

      <button type="submit" onClick={() => fetchData()} className={styles.btn}>
        <Image
          src="/advice-generator/images/icon-dice.svg"
          alt="New Advice"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
