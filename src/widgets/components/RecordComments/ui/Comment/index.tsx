import styles from "./styles.module.scss";

export const Comment = () => {
    return(
        <div className={styles.message}>
            <img
              className={styles.avatar}
              src="/assets/avatar.png"
              alt="avatar"
            />
            <div className={styles.messageContent}>
              <div className={styles.messageHeader}>
                <p className={styles.name}>Виктор</p>
                <p className={styles.time}>1 д. назад</p>
              </div>

              <div className={styles.messageText}>
                <p>
                  Проведенное время врача 2,5 ч Оценка записи 4,7 Оценка опроса
                  3,5
                </p>

                <div className={styles.messageCheck}>
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1336 0.248781L6.6336 7.16924L6.57835 7.23977C6.45066 7.43723 6.4799 7.7027 6.65978 7.86783C6.86213 8.05359 7.1785 8.04201 7.3664 7.84195L13.8664 0.9215L13.9216 0.850969C14.0493 0.653508 14.0201 0.388033 13.8402 0.222907C13.6379 0.0371413 13.3215 0.0487254 13.1336 0.248781ZM9.63521 0.247084L3.43573 6.78575L0.862149 4.11297L0.794346 4.05411C0.602859 3.91595 0.333042 3.92845 0.155256 4.09577C-0.0447525 4.284 -0.0525441 4.59689 0.137853 4.79463L3.07639 7.84642L3.14702 7.90734C3.34667 8.04934 3.62866 8.02787 3.80333 7.84365L10.3648 0.923197L10.4204 0.852923C10.549 0.656056 10.521 0.390449 10.3419 0.224491C10.1405 0.0377873 9.82405 0.0479029 9.63521 0.247084Z"
                      fill="#0064FA"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
    )
}