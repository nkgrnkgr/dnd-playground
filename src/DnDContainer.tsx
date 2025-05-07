import {
  DndContext,
  type DragEndEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

type Props = {
  children: React.ReactNode;
  onDragEnd: (event: DragEndEvent) => void;
};

export function DnDContainer({ children, onDragEnd }: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5,
      },
    }),
  );
  return (
    <DndContext
      sensors={sensors}
      modifiers={[restrictToWindowEdges]}
      onDragEnd={onDragEnd}
    >
      {children}
    </DndContext>
  );
}
