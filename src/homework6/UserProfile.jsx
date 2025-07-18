import  { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://randomuser.me/api');
      const userData = response.data.results[0];
      setUser(userData);
    } catch (error) {
      console.error('Ошибка при загрузке пользователя:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.title}>Профиль пользователя</h2>
      {loading ? (
        <p className={styles.loading}>Загрузка...</p>
      ) : user ? (
        <div className={styles.userInfo}>
          <img
            src={user.picture.large}
            alt="User"
            className={styles.userImage}
          />
          <p><strong>Имя:</strong> {user.name.first} {user.name.last}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Телефон:</strong> {user.phone}</p>
          <p><strong>Страна:</strong> {user.location.country}</p>
        </div>
      ) : (
        <p>Нет данных</p>
      )}
      <button className={styles.button} onClick={fetchUser}>
        Загрузить нового пользователя
      </button>
    </div>
  );
};

export default UserProfile;

