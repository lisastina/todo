import style from "../css/paper.module.css";
import { useState, useEffect } from "react";

const paper = () => {
  const [isDragging, setIsDragging] = useState(false);

  const initialX = "50%";
  const initialY = "50%";
  const [isInitial, setIsInitial] = useState(true);
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);
  const [relX, setRelX] = useState(null);
  const [relY, setRelY] = useState(null);

  const handleMouseDown = (e) => {
    if (e.target.id === "draggable") {
      setIsInitial(false);
      setRelX(e.nativeEvent.offsetX);
      setRelY(e.nativeEvent.offsetY);
      setIsDragging(true);

      e.stopPropagation();
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (relX && relY) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
  }, [relX, relY]);

  const handleMouseMove = (e) => {
    if (!isInitial) {
      setX(`${e.pageX - relX}px`);
      setY(`${e.pageY - relY}px`);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  const handleMouseUp = (e) => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);

    setIsDragging(false);
    e.stopPropagation();
    e.preventDefault();
    setRelX(null);
    setRelY(null);
  };

  return (
    <div
      className={style.paper}
      id="draggable"
      style={{
        left: `${x}`,
        top: `${y}`,
        cursor: isDragging ? "grabbing" : "grab",
        transform: isInitial && "translate(-50%, -50%)",
      }}
      onMouseDown={handleMouseDown}
    >
      <img src="https://www.pinclipart.com/picdir/big/197-1970545_transparent-pin-board-board-pin-icon-png-clipart.png" />
      <h2>Titel</h2>

      <label className={style.container}>
        <input type="text" />
        <input type="checkbox" />
        <span className={style.checkmark}></span>
      </label>
    </div>
  );
};

export default paper;
