import { useState } from "react";
import { MemoryItem } from "../memoryItem";
import styles from "./index.module.scss";

export const Memory: React.FC<any> = ({}) => {
  const [items, setItems] = useState([
    { className: "fa-solid fa-mountain-sun fa-2xl" },
    { className: "fa-solid fa-mountain-sun fa-2xl" },
    { className: "fa-solid fa-mountain-sun fa-2xl" },
    { className: "fa-solid fa-mountain-sun fa-2xl" },
    { className: "fa-solid fa-mountain-sun fa-2xl" },
    { className: "fa-solid fa-mountain-sun fa-2xl" },
    { className: "fa-solid fa-mountain-sun fa-2xl" },
    // { className: "memoryItemValueShow" },
  ]);

  const memoryItemClick = (r: any, index: any) => {
    console.log(index);
    console.log(items[index]);
    setItems(
      items.map((item, i) => (i === index ? { ...item, className: r } : item))
    );
  };

  return (
    <div className={styles.memory}>
      {items.map((item, index) => {
        return (
          <MemoryItem
            key={index}
            memoryItemClick={memoryItemClick}
            item={item.className}
            index={index}
          />
        );
      })}
      {/* {<MemoryItem memoryItemClick={memoryItemClick} qw={items[0].className} />} */}
    </div>
  );
};
