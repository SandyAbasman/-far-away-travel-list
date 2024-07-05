export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItem = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numpacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything ready to go ✈️"
          : `💼 You have ${numItem} items on your list, and you already packed
        ${numpacked} items (${percentage}%)`}
      </em>
    </footer>
  );
}
