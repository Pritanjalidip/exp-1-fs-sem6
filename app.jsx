import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseTotal from "./ExpenseTotal";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [
      ...prev,
      { ...expense, id: Date.now().toString() },
    ]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const filteredExpenses =
    filterCategory === "all"
      ? expenses
      : expenses.filter((e) => e.category === filterCategory);

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: "1rem" }}>
      <h1>Personal Expense Tracker</h1>

      <ExpenseForm onAddExpense={handleAddExpense} />

      <ExpenseFilter
        filterCategory={filterCategory}
        onChangeCategory={setFilterCategory}
      />

      <ExpenseList
        expenses={filteredExpenses}
        onDeleteExpense={handleDeleteExpense}
      />

      <ExpenseTotal expenses={filteredExpenses} />
    </div>
  );
}

export default App;
