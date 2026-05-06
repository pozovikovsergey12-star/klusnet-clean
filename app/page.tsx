
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
