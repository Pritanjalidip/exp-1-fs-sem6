function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return <p>No expenses to show.</p>;
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.title} - ₹{expense.amount} ({expense.category}){" "}
          <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
