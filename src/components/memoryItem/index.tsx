import styles from "../memory/index.module.scss";

interface MemoryItemProps {
  item: string;
  memoryItemClick: (e: string, index: number) => void;
  index: number;
}

export const MemoryItem: React.FC<MemoryItemProps> = ({
  memoryItemClick,
  item,
  index,
}) => {
  return (
    <div className={styles.memoryItem}>
      <div
        className={styles.memoryItemValueShow}
        onClick={() => memoryItemClick("memoryItemValueHiden", index)}
      >
        <i className={item}></i>
      </div>
    </div>
  );
};
