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
    // <div className={styles.memory}>
    <div
      className={styles[item]}
      onClick={() => memoryItemClick("memoryItem2", index)}
    >
      {item}
    </div>
    // </div>
  );
};
