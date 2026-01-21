function ExpenseTotal({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <h3>Total Spent: ₹{total}</h3>
  );
}

export default ExpenseTotal;
