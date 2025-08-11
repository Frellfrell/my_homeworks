import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CatImage.module.css";

const CatImage = () => {
  const [catUrl, setCatUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const fetchCatImage = async () => {
    setLoading(true);
    setFadeIn(false); // убираем анимацию, чтобы она сработала заново при смене картинки
    try {
      const response = await axios.get("https://api.thecatapi.com/v1/images/search");
      setCatUrl(response.data[0].url);// вставляем новую ссылку на картинку
      setTimeout(() => setFadeIn(true), 50); // запускаем анимацию через 50мс
    } catch (error) {
      console.error("Ошибка при загрузке изображения:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Случайная кошка 🐱</h1>
      {loading ? (
        <p className={styles.loading}>Загрузка...</p>
      ) : (
        <img
          src={catUrl}
          alt="Cat"
          className={`${styles.image} ${fadeIn ? styles.fadeIn : ""}`}
        />
      )}
      <button onClick={fetchCatImage} className={styles.button}>
        Показать другую
      </button>
    </div>
  );
};

export default CatImage;
