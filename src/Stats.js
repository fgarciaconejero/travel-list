export default function Stats({ items }) {
  // Early return
  if (!items.length)
    return (
      <p className="stats">
        <em> Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPacked * 100) / numItems);
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You have everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}
