import React, { FC, useState } from 'react';
import styles from './Counter.module.scss';

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.counter}>
      <h3>Update the count and edit src/App.tsx, state is preserved</h3>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Count - {count}
      </button>
    </div>
  );
};

export default Counter;
