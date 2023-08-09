import styles from "../memory/index.module.scss";

interface MemoryItemProps {
  item: { className: string; show: boolean; clear: boolean };
  memoryItemClick: (index: number) => void;
  index: number;
}

export const MemoryItem: React.FC<MemoryItemProps> = ({
  memoryItemClick,
  item,
  index,
}) => {
  return (
    <div className={item.clear ? styles.memoryItemClear : styles.memoryItem}>
      <div
        className={styles.memoryItemValueShow}
        onClick={() => memoryItemClick(index)}
      >
        {item.show && <i className={item.className}></i>}
      </div>
    </div>
  );
};
