import React from "react";
import { TaskItemProps } from "../task-item";
import styles from "./sprint.module.css";

export const Sprint: React.FC<TaskItemProps> = ({ task, isSelected }) => {
  const barColor = isSelected
    ? task.styles.backgroundSelectedColor
    : '#79b465';
  // const processColor = isSelected
  //   ? task.styles.progressSelectedColor
  //   : task.styles.progressColor;
  const sprintWidth = task.x2 - task.x1;


  return (
    <g tabIndex={0} className={styles.sprintWrapper}>
      <rect
        fill={barColor}
        x={task.x1}
        width={sprintWidth}
        y={0}
        height={22}
        rx={task.barCornerRadius}
        ry={task.barCornerRadius}
        className={styles.sprintBackground}
      />
      {/* <rect
        x={task.progressX}
        width={task.progressWidth}
        y={task.y}
        height={task.height}
        ry={task.barCornerRadius}
        rx={task.barCornerRadius}
        fill={processColor}
      /> */}
      {/* <rect
        fill={barColor}
        x={task.x1}
        width={sprintWidth}
        y={task.y - 10}
        height={15}
        rx={task.barCornerRadius}
        ry={task.barCornerRadius}
        className={styles.sprintTop}
      /> */}
    </g>
  );
};
