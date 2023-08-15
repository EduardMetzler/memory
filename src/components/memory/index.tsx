import { useEffect, useState } from "react";
import { MemoryItem } from "../memoryItem";
import styles from "./index.module.scss";
import { icons } from "../../data/icons";

interface Items {
  className: string;
  show: boolean;
  clear: boolean;
}

export const Memory: React.FC<any> = ({}) => {
  const [items, setItems] = useState<Items[]>([]);

  const [selected, setSelected] = useState(["", ""]);

  console.log(icons.length);

  useEffect(() => {
    console.log(JSON.parse(localStorage.data));
    var data =
      JSON.parse(localStorage.data) !== undefined
        ? JSON.parse(localStorage.data)
        : [{}];

    // const lok = localStorage.getItem("data");
    // console.log(data);
    if (data.length == 24) {
      setItems(data);
      // console.log(JSON.parse(localStorage.getItem("data")));
      console.log("wwwwwwwwwwwwwwwwwwwwwwwwww");
      // setItems(JSON.parse(localStorage.getItem("data")))
    } else {
      newGame();
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(items));
  }, [items]);

  const newGame = () => {
    if (icons) {
      const newItems = [];
      const allIcons = [...icons];
      for (let i = 0; i < 12; i++) {
        const indexOfIcon = Math.floor(Math.random() * (allIcons.length - 0));

        newItems.push({
          className: allIcons[indexOfIcon],
          show: false,
          clear: false,
          id: 0,
        });

        allIcons.splice(indexOfIcon, 1);
      }
      const twoNewItems = [...newItems];

      const newTwoNewItems = twoNewItems.map((oneItem) => {
        oneItem.id = Math.random();
        return oneItem;
      });

      const mix2 = newTwoNewItems.sort(function (a, b) {
        return a.id - b.id;
      });

      const twoNewItems1 = [...newItems];

      const newTwoNewItems1 = twoNewItems1.map((oneItem) => {
        oneItem.id = Math.random();
        return oneItem;
      });

      const mix1 = newTwoNewItems1.sort(function (a, b) {
        return a.id - b.id;
      });

      const mix = [...mix1, ...mix2];
      setItems(mix);
    }
  };

  const memoryItemClick = (index: number) => {
    if (items[index].show || items[index].clear) {
    } else if (!selected[0]) {
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
        prev.map((item) => (item.show ? { ...item, show: false } : item))
      );
      setItems((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, show: !items[index].show } : item
        )
      );

      setSelected([items[index].className, ""]);
    } else if (selected[0] && selected[1] && selected[0] === selected[1]) {
      setItems((prev) =>
        prev.map((item) =>
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
  };

  return (
    <>
      <h2> Memory</h2>
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
      <button onClick={newGame}>Noch Mal</button>
      {/* {items.map((item) => {
        return (
          <div className={styles.memoryItem}>
            <div className={styles.memoryItemValueShow}>
              <i className={item.className}></i>
            </div>
          </div>
        );
      })} */}
    </>
  );
};
