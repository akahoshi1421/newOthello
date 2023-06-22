import { Cell } from '../components/Cell';
import { useGame } from '../hooks/useGame';
import styles from './index.module.css';

const Home = () => {
  const { win, turnColor, board, onClick } = useGame();

  return (
    <div className={styles.container}>
      {win.black !== -1 && (
        <>
          <h2 className={styles.win}>
            結果:
            {win.black === win.white ? '引き分け' : win.black > win.white ? '黒の勝ち' : '白の勝ち'}
          </h2>
          <ul>
            <li>黒: {win.black}</li>
            <li>白: {win.white}</li>
          </ul>
        </>
      )}
      {win.black === -1 && <p>{turnColor === 1 ? '黒' : '白'}のターン</p>}

      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <Cell key={`${x}-${y}`} color={color} onClick={() => onClick(x, y)} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
