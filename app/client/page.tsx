'use client';

export default function ClientPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Клієнт</h1>

      <p>Тут клієнт створює завдання</p>

      <button
        style={{
          marginTop: 20,
          padding: "12px 20px",
          fontSize: 16,
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer"
        }}
        onClick={() => alert("Створення завдання скоро буде")}
      >
        Створити завдання
      </button>
    </main>
  );}
