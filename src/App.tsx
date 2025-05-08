import { useState } from "react";
import { Box } from "./Box";
import { DnDContainer } from "./DnDContainer";
import { Background } from "./Background";

export const App = () => {
  const [coordinate, setCoordinate] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  return (
    <div>
      <DnDContainer
        onDragEnd={({ delta }) => {
          setCoordinate((prev) => ({
            x: prev.x + delta.x,
            y: prev.y + delta.y,
          }));
        }}
      >
        <Box x={coordinate.x} y={coordinate.y} />
      </DnDContainer>
      <div>{`x: ${coordinate.x}, y: ${coordinate.y}`}</div>
      <Background />
    </div>
  );
};
