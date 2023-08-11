import { useEffect, useState } from "react";
import { MemoryItem } from "../memoryItem";
import styles from "./index.module.scss";

interface Items {
  className: string;
  show: boolean;
  clear: boolean;
}

export const Memory: React.FC<any> = ({}) => {
  const [items, setItems] = useState<Items[]>([]);

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
    "fa-solid fa-tower-cell fa-2xl",
    "fa-solid fa-toilets-portable fa-2xl",
    "fa-solid fa-timeline fa-2xl",
    "fa-solid fa-tents fa-2xl",
    "fa-solid fa-sun-plant-wilt fa-2xl",
    "fa-solid fa-stapler fa-2xl",
    "fa-solid fa-staff-snake fa-2xl",
    "fa-solid fa-shrimp fa-2xl",
    "fa-solid fa-shop-lock fa-2xl",
    "fa-solid fa-shield-heart fa-2xl",
    "fa-solid fa-sheet-plastic fa-2xl",
    "fa-solid fa-section fa-2xl",
    "fa-solid fa-sailboat fa-2xl",
    "fa-solid fa-sack-xmark fa-2xl",
    "fa-solid fa-road-bridge fa-2xl",
    "fa-solid fa-road-barrier fa-2xl",
    "fa-solid fa-plate-wheat fa-2xl",
    "fa-solid fa-plant-wilt fa-2xl",
    "fa-solid fa-plane-up fa-2xl",
    "fa-solid fa-person-walking-luggage fa-2xl",
    "fa-solid fa-person-through-window fa-2xl",
    "fa-solid fa-person-drowning fa-2xl",
    "fa-solid fa-people-line fa-2xl",
    "fa-solid fa-oil-well fa-2xl",
    "fa-solid fa-mountain-city fa-2xl",
    "fa-solid fa-mosquito fa-2xl",
    "fa-solid fa-money-bills fa-2xl",
    "fa-solid fa-mobile-retro fa-2xl",
    "fa-solid fa-location-pin-lock fa-2xl",
    "fa-solid fa-landmark-flag fa-2xl",
    "fa-solid fa-kitchen-set fa-2xl",
    "fa-solid fa-jar-wheat fa-2xl",
    "fa-solid fa-jar fa-2xl",
  ];
  console.log(icons.length);

  const newGame = () => {
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
  };

  useEffect(() => {
    newGame();
  }, []);

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
  };

  return (
    <>
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
