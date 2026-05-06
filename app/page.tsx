
export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#f9fafb",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>
          KlusNet — Noord-Brabant
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            marginBottom: "40px",
          }}
        >
          Платформа для поиска мастеров и заказов по ремонту и работам по дому.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/client"
            style={{
              padding: "16px 28px",
              backgroundColor: "#2563eb",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "10px",
              fontSize: "18px",
            }}
          >
            Я заказчик
          </a>

          <a
            href="/worker"
            style={{
              padding: "16px 28px",
              backgroundColor: "#16a34a",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "10px",
              fontSize: "18px",
            }}
          >
            Я мастер
          </a>
        </div>
      </div>
    </main>
  );
}
export default function ClientPage() {
  return (
    <main style={{ padding: 16, fontFamily: "system-ui, -apple-system, Arial" }}>
      <h1 style={{ fontSize: 28, margin: 0 }}>Клієнт</h1>
      <p style={{ marginTop: 8, opacity: 0.8 }}>
        Тут клієнт створює завдання: що зробити, де, коли і який бюджет.
      </p>

      <div style={{ marginTop: 16, maxWidth: 520, display: "grid", gap: 12 }}>
        <label style={{ display: "grid", gap: 6 }}>
          <span>Опис завдання</span>
          <textarea
            placeholder="Наприклад: зібрати шафу IKEA, повісити полицю…"
            rows={4}
            style={{ padding: 10, borderRadius: 10, border: "1px solid #ccc" }}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>Місто / індекс</span>
          <input
            placeholder="Наприклад: Tilburg 5038"
            style={{ padding: 10, borderRadius: 10, border: "1px solid #ccc" }}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>Бажана дата</span>
          <input
            type="date"
            style={{ padding: 10, borderRadius: 10, border: "1px solid #ccc" }}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>Бюджет (EUR)</span>
          <input
            type="number"
            min={0}
            placeholder="Наприклад: 80"
            style={{ padding: 10, borderRadius: 10, border: "1px solid #ccc" }}
          />
        </label>

        <button
          type="button"
          style={{
            padding: "12px 14px",
            borderRadius: 12,
            border: "1px solid #111",
            background: "#111",
            color: "#fff",
            fontSize: 16,
            cursor: "pointer",
          }}
          onClick={() => alert("Поки що без Firebase. Далі підключимо збереження.")}
        >
          Створити завдання
        </button>
      </div>
    </main>
  );

