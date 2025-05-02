import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import styles from "./index.module.css";

type DraggableItemProps = {
  children: React.ReactNode;
  handle: React.ReactNode;
  x: number;
  y: number;
};

export function DraggableItem({ children, handle, x, y }: DraggableItemProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    top: `${y}px`,
    left: `${x}px`,
  };

  return (
    <div ref={setNodeRef} style={style} className={styles.dragItem}>
      <div className={styles.wrapper}>
        <div {...attributes} {...listeners}>
          {handle}
        </div>
        {children}
      </div>
    </div>
  );
}
