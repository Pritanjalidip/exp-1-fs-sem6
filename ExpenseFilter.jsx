function ExpenseFilter({ filterCategory, onChangeCategory }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        Filter by category:{" "}
        <select
          value={filterCategory}
          onChange={(e) => onChangeCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="shopping">Shopping</option>
          <option value="bills">Bills</option>
          <option value="other">Other</option>
        </select>
      </label>
    </div>
  );
}

export default ExpenseFilter;
