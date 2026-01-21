import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !amount) return;

    onAddExpense({
      title: title.trim(),
      amount: Number(amount),
      category,
    });

    setTitle("");
    setAmount("");
    setCategory("food");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <div>
        <label>
          Title:{" "}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Amount:{" "}
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Category:{" "}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="shopping">Shopping</option>
            <option value="bills">Bills</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
