import { useEffect, useState } from "react";
import { MemoryItem } from "../memoryItem";
import styles from "./index.module.scss";

export const Memory: React.FC<any> = ({}) => {
  const [items, setItems] = useState([
    {
      className: "fa-solid fa-users-rectangle fa-2xl",
      show: false,
      clear: false,
    },
    { className: "fa-solid fa-vault fa-2xl", show: false, clear: false },
    {
      className: "fa-solid fa-vial-circle-check fa-2xl",
      show: false,
      clear: false,
    },
    {
      className: "fa-solid fa-wand-magic-sparkles fa-2xl",
      show: false,
      clear: false,
    },
    { className: "fa-solid fa-code-compare fa-2xl", show: false, clear: false },
    { className: "fa-solid fa-xmarks-lines fa-2xl", show: false, clear: false },
    { className: "fa-solid fa-wheat-awn fa-2xl", show: false, clear: false },
    {
      className: "fa-solid fa-turkish-lira-sign fa-2xl",
      show: false,
      clear: false,
    },
    { className: "fa-solid fa-truck-field fa-2xl", show: false, clear: false },
    { className: "fa-solid fa-trowel fa-2xl", show: false, clear: false },
    { className: "fa-solid fa-tree-city fa-2xl", show: false, clear: false },
    {
      className: "fa-solid fa-tower-observation fa-2xl",
      show: false,
      clear: false,
    },
    {
      className: "fa-solid fa-users-rectangle fa-2xl",
      show: false,
      clear: false,
    },
    { className: "fa-solid fa-vault fa-2xl", show: false, clear: false },
    {
      className: "fa-solid fa-vial-circle-check fa-2xl",
      show: false,
      clear: false,
    },
    {
      className: "fa-solid fa-wand-magic-sparkles fa-2xl",
      show: false,
      clear: false,
    },
    { className: "fa-solid fa-code-compare fa-2xl", show: false, clear: false },
    { className: "fa-solid fa-xmarks-lines fa-2xl", show: false, clear: false },
    { className: "fa-solid fa-wheat-awn fa-2xl", show: false, clear: false },
    {
      className: "fa-solid fa-turkish-lira-sign fa-2xl",
      show: false,
      clear: false,
    },
    { className: "fa-solid fa-truck-field fa-2xl", show: false, clear: false },
    { className: "fa-solid fa-trowel fa-2xl", show: false, clear: false },
    { className: "fa-solid fa-tree-city fa-2xl", show: false, clear: false },
    {
      className: "fa-solid fa-tower-observation fa-2xl",
      show: false,
      clear: false,
    },
  ]);

  const [selected, setSelected] = useState(["", ""]);

  const icons = [
    "fa-solid fa-mountain-sun fa-2xl",
    "fa-solid fa-wand-magic-sparkles fa-2xl",
    "fa-solid fa-code-compare fa-2xl",
    "fa-solid fa-xmarks-lines fa-2xl",
    "fa-solid fa-wheat-awn fa-2xl",
    "fa-solid fa-vial-circle-check fa-2xl",
    "fa-solid fa-vault fa-2xl",
    "fa-solid fa-users-rectangle fa-2xl",
    "fa-solid fa-turkish-lira-sign fa-2xl",
    "fa-solid fa-truck-field fa-2xl",
    "fa-solid fa-trowel fa-2xl",
    "fa-solid fa-tree-city fa-2xl",
    "fa-solid fa-tower-observation fa-2xl",
  ];

  const memoryItemClick = (index: number) => {
    if (!selected[0]) {
      setSelected(
        selected.map((select, i) => (i === 0 ? items[index].className : select))
      );
      setItems(
        items.map((item, i) =>
          i === index ? { ...item, show: !items[index].show } : item
        )
      );
    } else if (selected[0] && !selected[1]) {
      setSelected(
        selected.map((select, i) => (i === 1 ? items[index].className : select))
      );
      setItems(
        items.map((item, i) =>
          i === index ? { ...item, show: !items[index].show } : item
        )
      );
    } else if (selected[0] && selected[1] && selected[0] !== selected[1]) {
      setItems((prev) =>
        prev.map((item, i) => (item.show ? { ...item, show: false } : item))
      );
      setItems((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, show: !items[index].show } : item
        )
      );

      setSelected([items[index].className, ""]);
    } else if (selected[0] && selected[1] && selected[0] === selected[1]) {
      console.log("ssssssssssssssssssssssssssssssss");
      setItems((prev) =>
        prev.map((item, i) =>
          selected[0] === item.className ? { ...item, clear: true } : item
        )
      );
      setItems((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, show: !items[index].show } : item
        )
      );

      setSelected([items[index].className, ""]);
    }
    // setItems(
    //   items.map((item, i) =>
    //     i === index ? { ...item, show: !items[index].show } : item
    //   )
    // );

    console.log(items);
  };

  return (
    <div className={styles.memory}>
      {items.map((item, index) => {
        return (
          <MemoryItem
            key={index}
            memoryItemClick={memoryItemClick}
            item={item}
            index={index}
          />
        );
      })}
    </div>
  );
};
