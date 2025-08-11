import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './dynamicForm.module.css';

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    alert('Форма успешно отправлена!');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Имя</label>
        <input
          className={styles.input}
          {...register('firstName', { required: 'Имя обязательно' })}
        />
        {errors.firstName && <p className={styles.errorMessage}>{errors.firstName.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Фамилия</label>
        <input
          className={styles.input}
          {...register('lastName', { required: 'Фамилия обязательна' })}
        />
        {errors.lastName && <p className={styles.errorMessage}>{errors.lastName.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Email</label>
        <input
          type="email"
          className={styles.input}
          {...register('email', {
            required: 'Email обязателен',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Введите корректный email'
            }
          })}
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Адрес</label>
        <input
          className={styles.input}
          {...register('address', { required: 'Адрес обязателен' })}
        />
        {errors.address && <p className={styles.errorMessage}>{errors.address.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Пароль</label>
        <input
          type="password"
          className={styles.input}
          {...register('password', {
            required: 'Пароль обязателен',
            minLength: {
              value: 6,
              message: 'Пароль должен содержать минимум 6 символов'
            }
          })}
        />
        {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
      </div>

      <button type="submit" className={styles.submitButton}>
        Отправить
      </button>
    </form>
  );
};

export default DynamicForm;
