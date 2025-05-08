import { DraggableItem } from "../DraggableItem";
import styles from "./index.module.css";

type Props = {
  x: number;
  y: number;
};

export const Box = ({ x, y }: Props) => {
  return (
    <DraggableItem
      x={x}
      y={y}
      handle={<div className={styles.handle}>handle</div>}
    >
      <div className={styles.box}>
        <button type="button">
          Click
        </button>
      </div>
    </DraggableItem>
  );
};
